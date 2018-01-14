/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Button.css';

const cx = classNames.bind(s);

class PassButton extends React.Component {
  static propTypes = {
    handlePass: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        id="pass-btn"
        type="button"
        onClick={this.props.handlePass}
        className={cx({
          button: true,
        })}
      >
        停一手
      </button>
    );
  }
}

export default PassButton;
