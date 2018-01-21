/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Creation from './Creation';
import Layout from '../../components/Layout';
import createGo from './creation.graphql';

function action({ client }) {
  const handleCreate = (rule, boardsize, color, goal) =>
    client.mutate({
      mutation: createGo,
      variables: {
        rule,
        boardsize,
        color,
        goal,
      },
    });

  return {
    chunks: ['go-creation'],
    title: '新建对局',
    component: (
      <Layout>
        <Creation create={handleCreate} />
      </Layout>
    ),
  };
}

export default action;
