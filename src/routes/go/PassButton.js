/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';

class PassButton extends React.Component {
  static propTypes = {
    handlePass: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button id="pass-btn" type="button" onClick={this.props.handlePass}>
        停一手
      </button>
    );
  }
}

export default PassButton;
