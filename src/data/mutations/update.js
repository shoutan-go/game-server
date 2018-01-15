import { GraphQLString, GraphQLNonNull } from 'graphql';
import GoType from '../types/GoType';

import { redis } from '../../redis';
import { User, UserProfile } from '../models';

const updateGo = {
  type: GoType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    color: { type: GraphQLString },
  },
  resolve: (root, { id, color }) =>
    redis
      .hmgetAsync(`info:${id}`, color, 'black', 'white')
      .then(([r, black, white]) => {
        if (
          !r &&
          root.request.user &&
          black !== root.request.user.id &&
          white !== root.request.user.id
        ) {
          return redis.hsetAsync(`info:${id}`, color, root.request.user.id);
        }
        return Promise.resolve(true);
      })
      // publish join
      .then(() =>
        Promise.all([
          redis.getAsync(`engine:${id}`),
          redis.hgetallAsync(`info:${id}`),
          redis.lrangeAsync(`moves:${id}`, 0, -1),
        ]).then(([engine, info, moves]) =>
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
                    engine,
                    moves: moves.map(JSON.parse),
                    info: {
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
                    },
                  },
                }),
              )
              .then(() => Promise.resolve([engine, info]));
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
