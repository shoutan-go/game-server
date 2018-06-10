import { GraphQLString, GraphQLNonNull } from 'graphql';
import GoType from '../types/GoType';
import { User, UserProfile, GoInfo, GoMove } from '../models';
import { redis } from '../../redis';

const updateGo = {
  type: GoType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    color: { type: GraphQLString },
  },
  resolve: (root, { id, color }) =>
    GoInfo.findOne({
      where: {
        id,
      },
    })
      .then(goInfo => {
        if (
          goInfo[color] === null &&
          root.request.user &&
          goInfo.black !== root.request.user.id &&
          goInfo.white !== root.request.user.id
        ) {
          return GoInfo.update(
            {
              [color]: root.request.user.id,
            },
            {
              where: {
                id,
              },
            },
          );
        }
        return Promise.resolve(true);
      })
      // publish join
      .then(() =>
        Promise.all([
          GoInfo.findOne({
            where: {
              id,
            },
          }),
          GoMove.findOne({
            where: {
              id,
            },
          }).then(goMove => goMove.move),
        ]).then(([info, moves]) =>
          User.findAll({
            where: { id: { $in: [info.black, info.white] } },
            include: [
              {
                attributes: ['displayName', 'picture'],
                model: UserProfile,
                as: 'profile',
                required: true,
              },
            ],
          }).then(users => {
            const players = users.filter(e => e).map(user => {
              const u = user.get({ plain: true });
              return {
                id: u.id,
                displayName: u.profile.displayName,
                picture: u.profile.picture,
              };
            });
            let profile = {};
            // eslint-disable-next-line no-restricted-syntax
            for (const player of players) {
              profile = Object.assign(profile, {
                [player.id]: player,
              });
            }
            return redis
              .publishAsync(
                `channel:${id}`,
                JSON.stringify({
                  code: 'ok',
                  type: 'init',
                  game: {
                    engine: info.rule,
                    moves: moves.map(JSON.parse),
                    info: {
                      result: info.result,
                      boardsize: info.boardsize,
                      black: {
                        id: info.black,
                        name: profile[info.black]
                          ? profile[info.black].displayName
                          : '[黑棋]',
                        avatar: profile[info.black]
                          ? profile[info.black].picture
                          : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64',
                      },
                      white: {
                        id: info.white,
                        name: profile[info.white]
                          ? profile[info.white].displayName
                          : '[白棋]',
                        avatar: profile[info.white]
                          ? profile[info.white].picture
                          : 'http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64',
                      },
                      goal: info.goal,
                    },
                  },
                }),
              )
              .then(() =>
                Promise.resolve([
                  info.rule,
                  Object.keys(info)
                    .filter(key =>
                      [
                        'boardsize',
                        'handicap',
                        'komi',
                        'black',
                        'white',
                        'goal',
                        'result',
                      ].includes(key),
                    )
                    .reduce((obj, key) => {
                      obj[key] = info[key];
                      return obj;
                    }, {}),
                ]),
              );
          }),
        ),
      )
      // return info
      .then(([engine, info]) => ({
        id,
        engine,
        info,
      })),
};

export default updateGo;
