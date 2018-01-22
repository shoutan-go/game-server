/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Go from './Go';
import Layout from '../../components/Layout';
import updateGo from './invite.graphql';
import queryGo from './go.graphql';

async function action({ query: { id, invite }, store, client }) {
  if (invite === 'black' || invite === 'white') {
    client.mutate({
      mutation: updateGo,
      variables: {
        id,
        color: invite,
      },
    });
  }

  const { data } = await client.query({
    query: queryGo,
    variables: {
      id,
    },
  });

  return {
    chunks: ['go'],
    title:
      data.go.engine === 'Go' ? '对局中' : `吃子棋(${data.go.info.goal}子)`,
    component: (
      <Layout>
        <Go
          id={id}
          boardsize={data.go.info.boardsize}
          user={store.getState().user && store.getState().user.id}
        />
      </Layout>
    ),
  };
}

export default action;
