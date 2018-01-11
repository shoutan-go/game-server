/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import PropTypes from 'prop-types';

class Wechat extends React.Component {
  static propTypes = {
    // appId: PropTypes.string.isRequired,
    // timestamp: PropTypes.number.isRequired,
    // nonceStr: PropTypes.string.isRequired,
    // signature: PropTypes.string.isRequired,
  };

  render() {
    if (typeof window !== 'undefined') {
      // wx.config({
      //   debug: false,
      //   appId: this.props.appId,
      //   timestamp: this.props.timestamp,
      //   nonceStr: this.props.nonceStr,
      //   signature: this.props.signature,
      //   jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
      // });
    }
    return <div />;
  }
}

export default Wechat;
