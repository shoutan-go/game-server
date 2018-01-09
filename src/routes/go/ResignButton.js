/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';

class ResignButton extends React.Component {
  static propTypes = {
    handleResign: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button id="resign-btn" type="button" onClick={this.props.handleResign}>
        认输
      </button>
    );
  }
}

export default ResignButton;
