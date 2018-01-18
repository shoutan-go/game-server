/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import utils from '../utils';
import HighlightIntersection from './HighlightIntersection';
// eslint-disable-next-line css-modules/no-unused-class
import s from './HighlightLayer.css';

const cx = classNames.bind(s);

class HighlightLayer extends React.Component {
  static propTypes = {
    boardsize: PropTypes.number.isRequired,
    listenerRegister: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    ['touchStart', 'touchMove', 'touchEnd', 'click'].forEach(event => {
      this.props.listenerRegister(event, this.eventHandler(event));
    });
    this.intersection = this.intersection.bind(this);
    this.state = {
      events: {},
    };
  }

  eventHandler(event) {
    return (i, j) => {
      this.setState({
        events: {
          [event]: [i, j],
        },
      });
    };
  }

  intersection(i, j) {
    const highlight =
      this.state.events.touchStart || this.state.events.touchMove || [];
    return (
      <HighlightIntersection
        key={`${i},${j}`}
        row={i}
        col={j}
        classNames={{
          highlight: j === highlight[1] || i === highlight[0],
        }}
      />
    );
  }

  render() {
    return utils.render(this.props.boardsize, cx, this.intersection);
  }
}

export default withStyles(s)(HighlightLayer);
