/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Go from './Go';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['go'],
    title: '对局中',
    component: (
      <Layout>
        <Go />
      </Layout>
    ),
  };
}

export default action;
