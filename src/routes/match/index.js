/**
 * @author lookis on 10/06/2018
 */
import React from 'react';
import swal from 'sweetalert2';
import queryMatch from './match.graphql';

function action({ query: { id }, client }) {
  return client
    .query({
      query: queryMatch,
      variables: {
        id,
      },
    })
    .then(({ data }) => {
      if (data && data.match && data.match.id) {
        return {
          redirect: `/go?id=${data.match.id}&invite=${data.match.color}`,
        };
      }
      if (typeof window !== 'undefined') {
        swal({
          type: 'error',
          title: '比赛已结束',
        }).then(() => {
          wx.closeWindow();
        });
      }
      return {
        chunks: ['match'],
        title: '匹配中',
        component: <div />,
      };
    });
}

export default action;
