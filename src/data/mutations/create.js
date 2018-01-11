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
  },
  resolve: (value, { rule, boardsize }) => {
    const id = Math.random()
      .toString(16)
      .split('.')[1];
    return redis
      .msetAsync(
        `engine:${id}`,
        rule,
        `info:${id}`,
        JSON.stringify({
          boardsize,
        }),
      )
      .then(() => ({
        id,
        engine: rule,
        info: {
          boardsize,
        },
      }));
  },
};

export default createGo;
