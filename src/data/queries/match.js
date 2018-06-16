/**
 * @author lookis on 17/01/2018
 */

import { GraphQLNonNull, GraphQLString } from 'graphql';
import GoMatch from '../types/GoMatch';
import sequelize from '../sequelize';
import { MatchInfo, MatchGame, GoInfo, GoMove } from '../models';

const Go = {
  type: GoMatch,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve({ request }, { id }) {
    if (request.user) {
      const player = request.user.id;
      // find the one already join
      return MatchGame.findOne({
        where: {
          match: id,
          player,
        },
      }).then(r => {
        if (r) {
          return {
            id: r.game,
          };
        }
        // find the one not full
        return MatchGame.findOne({
          where: {
            match: id,
          },
          group: ['game'],
          having: sequelize.literal('count(player) < 2'),
        }).then(r1 => {
          if (r1) {
            return {
              id: r1.game,
              color: 'white',
            };
          }
          // create new game
          return MatchInfo.findOne({
            where: {
              id,
            },
          }).then(match => {
            // create go game
            const goId = Math.random()
              .toString(16)
              .split('.')[1];
            return GoInfo.create(
              Object.assign(
                {
                  id: goId,
                  rule: match.rule,
                  boardsize: match.boardsize,
                  handicap: match.handicap,
                  komi: match.komi,
                  black: player,
                },
                match.goal ? { goal: match.goal } : {},
              ),
            )
              .then(() =>
                GoMove.create({
                  id: goId,
                }),
              )
              .then(() => {
                MatchGame.create({
                  match: match.id,
                  player,
                  game: goId,
                });
              })
              .then(() => ({
                id: goId,
                color: 'black',
              }));
          });
        });
      });
    }
    return {
      id: null,
    };
  },
};

export default Go;
