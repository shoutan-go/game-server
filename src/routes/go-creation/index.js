/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Creation from './Creation';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['go-creation'],
    title: '新建对局',
    component: (
      <Layout>
        <Creation />
      </Layout>
    ),
  };
}

export default action;
