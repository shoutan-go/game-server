/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Button.css';

const cx = classNames.bind(s);

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
        className={cx({
          confirm: true,
          button: true,
        })}
        disabled={this.props.disable}
        onClick={this.props.handleConfirm}
      >
        确认
      </button>
    );
  }
}

export default withStyles(s)(ConfirmButton);
