/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

class ConfirmButton extends React.Component {
  static propTypes = {
    disable: PropTypes.bool.isRequired,
    handleConfirm: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        id="confirm-btn"
        type="button"
        className={s.confirm}
        disabled={this.props.disable}
        onClick={this.props.handleConfirm}
      >
        确认
      </button>
    );
  }
}

export default withStyles(s)(ConfirmButton);
