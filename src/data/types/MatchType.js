import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const MatchType = new GraphQLObjectType({
  name: 'Match',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    engine: {
      type: new GraphQLNonNull(GraphQLString),
    },
    info: {
      type: new GraphQLObjectType({
        name: 'MatchInfo',
        fields: {
          boardsize: {
            type: new GraphQLNonNull(GraphQLInt),
          },
          goal: {
            type: GraphQLInt,
          },
        },
      }),
    },
  },
});

export default MatchType;
