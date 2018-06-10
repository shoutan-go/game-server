import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import GoType from '../types/GoType';
import { GoInfo } from '../models';

const createGo = {
  type: GoType,
  args: {
    rule: { type: new GraphQLNonNull(GraphQLString) },
    boardsize: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    handicap: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    komi: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    color: { type: GraphQLString },
    goal: {
      type: GraphQLInt,
    },
  },
  resolve: (root, { rule, boardsize, handicap, komi, color, goal }) => {
    const id = Math.random()
      .toString(16)
      .split('.')[1];
    return GoInfo.create(
      Object.assign(
        {
          id,
          rule,
          boardsize,
          handicap,
          komi,
        },
        color === 'black'
          ? { black: root.request.user.id }
          : { white: root.request.user.id },
        goal ? { goal } : {},
      ),
    ).then(() => ({
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
