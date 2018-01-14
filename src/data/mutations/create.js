import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import GoType from '../types/GoType';

import { redis } from '../../redis';

const createGo = {
  type: GoType,
  args: {
    rule: { type: new GraphQLNonNull(GraphQLString) },
    boardsize: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    handicap: {
      type: GraphQLInt,
    },
    komi: {
      type: GraphQLFloat,
    },
    color: { type: GraphQLString },
  },
  resolve: (root, { rule, boardsize, handicap, komi, color }) => {
    const id = Math.random()
      .toString(16)
      .split('.')[1];
    return Promise.all([
      redis.setAsync(`engine:${id}`, rule),
      redis.hmsetAsync(
        `info:${id}`,
        Object.assign(
          {
            boardsize,
            handicap: handicap || 0,
            komi: komi || 6.5,
          },
          color === 'black'
            ? { black: root.request.user.id }
            : { white: root.request.user.id },
        ),
      ),
    ]).then(() => ({
      id,
      engine: rule,
      info: {
        boardsize,
        black: color === 'black' ? root.request.user.id : null,
        white: color === 'white' ? root.request.user.id : null,
      },
    }));
  },
};

export default createGo;
