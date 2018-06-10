/**
 * @author lookis on 17/01/2018
 */

import { GraphQLNonNull, GraphQLString } from 'graphql';
import GoType from '../types/GoType';
import { GoInfo } from '../models';

const Go = {
  type: GoType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, { id }) {
    return GoInfo.findOne({
      where: {
        id,
      },
    }).then(r => r.get({plain: true}))
      .then(go => ({
      id,
      engine: go.rule,
      info: Object.keys(go)
        .filter(key =>
          [
            'boardsize',
            'handicap',
            'komi',
            'black',
            'white',
            'goal',
            'result',
          ].includes(key),
        )
        .reduce((obj, key) => {
          obj[key] = go[key];
          return obj;
        }, {}),
    }));
  },
};

export default Go;
