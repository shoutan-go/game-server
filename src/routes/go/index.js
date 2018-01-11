/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Go from './Go';
import Layout from '../../components/Layout';

function action({ query: { id, player } }) {
  return {
    chunks: ['go'],
    title: '对局中',
    component: (
      <Layout>
        <Go id={id} player={player} />
      </Layout>
    ),
  };
}

export default action;
