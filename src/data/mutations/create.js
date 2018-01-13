import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

import { redis } from '../../redis';

const createGo = {
  type: new GraphQLObjectType({
    name: 'Go',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
      engine: {
        type: new GraphQLNonNull(GraphQLString),
      },
      info: {
        type: new GraphQLObjectType({
          name: 'GoInfo',
          fields: {
            boardsize: {
              type: new GraphQLNonNull(GraphQLInt),
            },
            black: {
              type: GraphQLString,
            },
            white: {
              type: GraphQLString,
            },
          },
        }),
      },
    },
  }),
  args: {
    rule: { type: new GraphQLNonNull(GraphQLString) },
    boardsize: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    color: { type: GraphQLString },
  },
  resolve: (root, { rule, boardsize, color }) => {
    const id = Math.random()
      .toString(16)
      .split('.')[1];
    return redis
      .msetAsync(
        `engine:${id}`,
        rule,
        `info:${id}`,
        JSON.stringify({
          black: color === 'black' ? root.request.user.id : null,
          white: color === 'white' ? root.request.user.id : null,
          boardsize,
        }),
      )
      .then(() => ({
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
