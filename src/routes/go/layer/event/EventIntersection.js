/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// eslint-disable-next-line css-modules/no-unused-class
import s from '../Intersection.css';

const cx = classNames.bind(s);

class EventIntersection extends React.Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        className={cx({
          intersection: true,
        })}
      />
    );
  }
}

export default withStyles(s)(EventIntersection);
