import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const WechatType = new GraphQLObjectType({
  name: 'Wechat',
  fields: {
    appId: {
      type: GraphQLString,
    },
    timestamp: {
      type: GraphQLInt,
    },
    nonceStr: {
      type: GraphQLString,
    },
    signature: {
      type: GraphQLString,
    },
  },
});

export default WechatType;
