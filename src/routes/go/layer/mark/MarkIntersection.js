/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import GameEngine from 'game-engine';
// eslint-disable-next-line css-modules/no-unused-class
import s from './MarkIntersection.css';

const cx = classNames.bind(s);

class MarkIntersection extends React.Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    mark: PropTypes.string,
  };

  static defaultProps = {
    mark: 'empty',
  };

  render() {
    return (
      <div
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        className={cx({
          intersection: true,
          mark: true,
          [this.props.mark]: true,
        })}
      />
    );
  }
}

export default withStyles(s)(MarkIntersection);
