import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import MatchType from '../types/MatchType';
import { MatchInfo } from '../models';

const createMatch = {
  type: MatchType,
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
    expiredIn: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    goal: {
      type: GraphQLInt,
    },
  },
  resolve: (root, { rule, boardsize, handicap, komi, expiredIn, goal }) => {
    const id = Math.random()
      .toString(16)
      .split('.')[1];
    return MatchInfo.create(
      Object.assign(
        {
          id,
          rule,
          boardsize,
          handicap,
          komi,
          expiredIn,
        },
        goal ? { goal } : {},
      ),
    ).then(() => ({
      id,
      engine: rule,
      info: {
        boardsize,
      },
    }));
  },
};

export default createMatch;
