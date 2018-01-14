/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Button.css';

const cx = classNames.bind(s);

class ResignButton extends React.Component {
  static propTypes = {
    handleResign: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        id="resign-btn"
        type="button"
        onClick={this.props.handleResign}
        className={cx({
          button: true,
        })}
      >
        认输
      </button>
    );
  }
}

export default ResignButton;
