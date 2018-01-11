import express from 'express';
import GameEngine from 'game-engine';

import { redis, subscriber } from './redis';

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
    ws.on('message', msg => {
      switch (msg.type) {
        case 'play':
        case 'pass':
        case 'resign':
          redis
            .mgetAsync([
              `engine:${ws.channel}`,
              `info:${ws.channel}`,
              `moves:${ws.channel}`,
            ])
            .then(([engine, info, moves]) => {
              const eg = new GameEngine[engine](info, moves);
              if (
                eg[msg.type](
                  msg.color,
                  msg.position && msg.position[0],
                  msg.position && msg.position[1],
                )
              ) {
                redis
                  .rpushAsync(`moves:${ws.channel}`, JSON.stringify(msg))
                  .then(() => {
                    subscriber.publish(
                      `channel:${ws.channel}`,
                      JSON.stringify({
                        code: 'ok',
                        type: 'delta',
                        move: msg,
                      }),
                    );
                  });
              }
            });
          break;
        default:
          break;
      }
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
      if (!channels[req.params.channel]) {
        subscriber.subscribe(`channel:${req.params.channel}`);
        channels[req.params.channel] = [];
      }
      if (ws.channel) {
        const channel = channels[ws.channel];
        channel.splice(channel.indexOf(ws), 1);
      }
      channels[req.params.channel].push(ws);
      // eslint-disable-next-line no-param-reassign
      ws.channel = req.params.channel;
      redis
        .mgetAsync([
          `engine:${ws.channel}`,
          `info:${ws.channel}`,
          `moves:${ws.channel}`,
        ])
        .then(([engine, info, moves]) => {
          ws.send(
            JSON.stringify({
              code: 'ok',
              type: 'init',
              game: {
                engine,
                info,
                moves,
              },
            }),
          );
        });
    })();
  });
  return router;
}
