import express from 'express';
import GameEngine from 'game-engine';
import fetch from 'node-fetch';
import config from './config';
import { User, UserProfile, GoInfo, GoMove } from './data/models';

import { redis, subscriber } from './redis';

const re = new RegExp('^(B|W)[a-z]* wins by ([\\d\\.]+) points');

const channels = {};

subscriber.on('message', (channel, message) => {
  const chan = channel.split(':')[1];
  channels[chan].forEach(ws => {
    ws.send(message);
  });
});

export default function() {
  const router = express.Router();
  router.ws('/channel/:channel', (ws, req) => {
    ws.on('message', data => {
      const msg = JSON.parse(data);
      Promise.all([
        GoInfo.findOne({
          where: {
            id: ws.channel,
          },
        }),
        GoMove.findOne({
          where: {
            id: ws.channel,
          }
        }).then(move => {
          return move.move;
        }),
      ]).then(([info, moves]) => {
        const rule = info.rule;
        const engine = new GameEngine[rule](info, moves.map(JSON.parse));
        let color;
        if (info.black === req.user.id) {
          color = GameEngine.Go.COLOR.BLACK;
        } else if (info.white === req.user.id) {
          color = GameEngine.Go.COLOR.WHITE;
        }
        if (!color) {
          return;
        }
        const result = engine[msg.type](
          color,
          msg.position && msg.position[0],
          msg.position && msg.position[1],
        );
        if (
          typeof result === 'number' ||
          (typeof result === 'boolean' && result)
        ) {
          moves.push(Object.assign({ color }, msg))
          GoMove.update({
            moves
          }, {
            where: {
              id: ws.channel,
            },
          })
            .then(() =>
              redis.publishAsync(
                `channel:${ws.channel}`,
                JSON.stringify({
                  code: 'ok',
                  type: 'delta',
                  move: Object.assign({ color }, msg),
                }),
              ),
            )
            .then(() => {
              if (engine.winner() === 'estimate') {
                fetch(config.gnugo, {
                  method: 'POST',
                  body: engine.toSgf(),
                })
                  .then(res => res.text())
                  .then(text => {
                    const r = text.match(re);
                    if (r) {
                      info.result = `${r[1]}+${r[2]}`;
                      info
                        .save()
                        .then(() => {
                          redis.publishAsync(
                            `channel:${ws.channel}`,
                            JSON.stringify({
                              code: 'ok',
                              type: 'result',
                              result: `${r[1]}+${r[2]}`,
                            }),
                          );
                        });
                    }
                  });
              } else if (engine.winner()) {
                const winner = engine.winner();
                info.result = `${winner === GameEngine.Go.COLOR.BLACK ? 'B+R' : 'W+R'}`
                info
                  .save()
                  .then(() => {
                    redis.publishAsync(
                      `channel:${ws.channel}`,
                      JSON.stringify({
                        code: 'ok',
                        type: 'result',
                        result: `${
                          winner === GameEngine.Go.COLOR.BLACK ? 'B+R' : 'W+R'
                        }`,
                      }),
                    );
                  });
              }
            });
        }
      });
    });

    ws.on('close', () => {
      if (ws.channel) {
        const channel = channels[ws.channel];
        channel.splice(channel.indexOf(ws), 1);
        if (channel.length === 0) {
          delete channels[ws.channel];
          subscriber.unsubscribe(`channel:${ws.channel}`);
        }
        // eslint-disable-next-line no-param-reassign
        delete ws.channel;
      }
    });

    (() => {
      // quit prev channel
      if (!channels[req.params.channel]) {
        subscriber.subscribe(`channel:${req.params.channel}`);
        channels[req.params.channel] = [];
      }
      if (ws.channel) {
        const channel = channels[ws.channel];
        channel.splice(channel.indexOf(ws), 1);
      }
      // subscribe to new channel
      channels[req.params.channel].push(ws);
      // eslint-disable-next-line no-param-reassign
      ws.channel = req.params.channel;
      // send new game info
      Promise.all([
        GoInfo.findOne({
          where: {
            id: ws.channel,
          },
        }),
        GoMove.findOne({
          where: {
            id: ws.channel,
          }
        }).then(move => {
          return move.move;
        }),
      ]).then(([info, moves]) => {
        const engine = info.rule;
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
          ws.send(
            JSON.stringify({
              code: 'ok',
              type: 'init',
              game: {
                engine,
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
          );
        });
      });
    })();
  });
  return router;
}
