/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// eslint-disable-next-line css-modules/no-unused-class
import css from './LineIntersection.css';

const cx = classNames.bind(css);

class LineIntersection extends React.Component {
  static propTypes = {
    star: PropTypes.bool.isRequired,
    classNames: PropTypes.shape({
      lastLine: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div
        className={cx({
          star: this.props.star,
          intersection: true,
          line: true,
          ...this.props.classNames,
        })}
      />
    );
  }
}

export default withStyles(css)(LineIntersection);
