/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import go from './queries/go';
import wechat from './queries/wechat';
import match from './queries/match';

import create from './mutations/create';
import createMatch from './mutations/createMatch';
import update from './mutations/update';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      go,
      news,
      wechat,
      match,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createGo: create,
      createGoMatch: createMatch,
      updateGo: update,
    },
  }),
});

export default schema;
