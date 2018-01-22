import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const GoType = new GraphQLObjectType({
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
          goal: {
            type: GraphQLInt,
          },
        },
      }),
    },
  },
});

export default GoType;
