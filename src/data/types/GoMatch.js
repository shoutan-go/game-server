import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

const GoMatch = new GraphQLObjectType({
  name: 'GoMatch',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    color: {
      type: GraphQLString,
    },
  },
});

export default GoMatch;
