/**
 * @author lookis on 17/01/2018
 */

import { GraphQLNonNull, GraphQLString } from 'graphql';
import GoType from '../types/GoType';
import { redis } from '../../redis';

const Go = {
  type: GoType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, { id }) {
    return Promise.all([
      redis.getAsync(`engine:${id}`),
      redis.hgetallAsync(`info:${id}`),
    ]).then(([engine, info]) => ({
      id,
      engine,
      info,
    }));
  },
};

export default Go;
