/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
// eslint-disable-next-line css-modules/no-unused-class
import s from './HighlightIntersection.css';

const cx = classNames.bind(s);

class HighlightIntersection extends React.Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    classNames: PropTypes.shape({
      highlight: PropTypes.bool.isRequired,
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

export default withStyles(s)(HighlightIntersection);
