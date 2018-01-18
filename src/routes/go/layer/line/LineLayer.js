/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import utils from '../utils';
import LineIntersection from './LineIntersection';
// eslint-disable-next-line css-modules/no-unused-class
import s from './LineLayer.css';

const cx = classNames.bind(s);

class LineLayer extends React.Component {
  static propTypes = {
    boardsize: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.intersection = this.intersection.bind(this);
    this.stars = [];
    switch (this.props.boardsize) {
      case 9:
        this.stars = [[2, 2], [2, 6], [4, 4], [6, 2], [6, 6]];
        break;
      case 13:
        this.stars = [[3, 3], [3, 9], [6, 6], [9, 3], [9, 9]];
        break;
      case 19:
        this.stars = [
          [3, 3],
          [3, 9],
          [3, 15],
          [9, 3],
          [9, 9],
          [9, 15],
          [15, 3],
          [15, 9],
          [15, 15],
        ];
        break;
      default:
        break;
    }
  }

  isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === item[0] && array[i][1] === item[1]) {
        return true;
      }
    }
    return false;
  }

  intersection(i, j) {
    return (
      <LineIntersection
        key={`${i},${j}`}
        star={this.isItemInArray(this.stars, [i, j])}
        classNames={{
          lastLine: i === this.props.boardsize - 1,
        }}
      />
    );
  }

  render() {
    return utils.render(this.props.boardsize, cx, this.intersection);
  }
}

export default withStyles(s)(LineLayer);
