import { GraphQLObjectType, GraphQLString } from 'graphql';

const GoMatch = new GraphQLObjectType({
  name: 'GoMatch',
  fields: {
    id: {
      type: GraphQLString,
    },
    color: {
      type: GraphQLString,
    },
  },
});

export default GoMatch;
