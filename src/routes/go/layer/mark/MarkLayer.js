/**
 * @author lookis on 18/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import utils from '../utils';
import Intersection from './MarkIntersection';
// eslint-disable-next-line css-modules/no-unused-class
import s from '../BoardLayer.css';

const cx = classNames.bind(s);

class MarkLayer extends React.Component {
  static propTypes = {
    boardsize: PropTypes.number.isRequired,
    marks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  };

  constructor(props) {
    super(props);
    this.intersection = this.intersection.bind(this);
  }

  intersection(i, j) {
    if (this.props.marks[i][j]) {
      return (
        <Intersection
          key={`${i},${j}`}
          row={i}
          col={j}
          mark={this.props.marks[i][j]}
        />
      );
    }
    return <Intersection key={`${i},${j}`} row={i} col={j} />;
  }

  render() {
    return utils.render(this.props.boardsize, cx, this.intersection);
  }
}

export default withStyles(s)(MarkLayer);
