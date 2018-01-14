/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Go from './Go';
import Layout from '../../components/Layout';
import updateGo from './invite.graphql';

function action({ query: { id, invite }, store, client }) {
  if (invite === 'black' || invite === 'white') {
    client.mutate({
      mutation: updateGo,
      variables: {
        id,
        color: invite,
      },
    });
  }
  return {
    chunks: ['go'],
    title: '对局中',
    component: (
      <Layout>
        <Go id={id} user={store.getState().user && store.getState().user.id} />
      </Layout>
    ),
  };
}

export default action;
