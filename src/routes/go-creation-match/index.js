/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import Match from './Match';
import Layout from '../../components/Layout';
import createGoMatch from './match.graphql';

function action({ client }) {
  const handleCreate = (rule, boardsize, handicap, komi, expiredIn, goal) => {
    const fixedGoal = rule === 'CaptureGo' ? goal || 1 : null;
    return client.mutate({
      mutation: createGoMatch,
      variables: {
        rule,
        boardsize,
        handicap,
        komi,
        expiredIn,
        goal: fixedGoal,
      },
    });
  };

  return {
    chunks: ['go-creation-match'],
    title: '新建随机对局',
    component: (
      <Layout>
        <Match create={handleCreate} />
      </Layout>
    ),
  };
}

export default action;
