/**
 * @author lookis on 18/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
// eslint-disable-next-line css-modules/no-unused-class
import s from './StoneIntersection.css';

const cx = classNames.bind(s);

class StoneIntersection extends React.Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    classNames: PropTypes.shape({
      black: PropTypes.bool.isRequired,
      white: PropTypes.bool.isRequired,
      temporary: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        className={cx({
          intersection: true,
          ...this.props.classNames,
        })}
      />
    );
  }
}

export default withStyles(s)(StoneIntersection);
