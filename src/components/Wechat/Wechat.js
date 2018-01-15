/* eslint-disable no-undef */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import wechatQuery from './wechat.graphql';

class Wechat extends React.Component {
  static contextTypes = {
    client: PropTypes.any.isRequired,
    store: PropTypes.any.isRequired,
  };
  render() {
    if (typeof window !== 'undefined') {
      this.context.client
        .query({
          query: wechatQuery,
          variables: {
            url: window.location.href,
          },
        })
        .then(resp => {
          wx.config({
            debug: false,
            ...resp.data.wechat,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
          });
        });
    }
    return <div />;
  }
}

export default Wechat;
