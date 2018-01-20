/* eslint-disable react/no-unused-prop-types */
/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import EventIntersection from './EventIntersection';
// eslint-disable-next-line css-modules/no-unused-class
import s from '../BoardLayer.css';

const cx = classNames.bind(s);

class EventLayer extends React.Component {
  static propTypes = {
    boardsize: PropTypes.number.isRequired,
    touchStart: PropTypes.func.isRequired,
    touchMove: PropTypes.func.isRequired,
    touchEnd: PropTypes.func.isRequired,
    click: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { clientX, clientY } = e;
    const target = document.elementFromPoint(clientX, clientY);
    this.props.click(
      parseInt(target.getAttribute('data-offset-x'), 10),
      parseInt(target.getAttribute('data-offset-y'), 10),
    );
  }

  handler(event) {
    return e => {
      e.preventDefault();
      const { clientX, clientY } = e.changedTouches[0];
      const target = document.elementFromPoint(clientX, clientY);
      this.props[event](
        parseInt(target.getAttribute('data-offset-x'), 10),
        parseInt(target.getAttribute('data-offset-y'), 10),
      );
    };
  }

  render() {
    const intersections = [];
    for (let i = 0; i < this.props.boardsize; i += 1) {
      const row = [];
      for (let j = 0; j < this.props.boardsize; j += 1) {
        row.push(<EventIntersection row={i} col={j} key={`${i},${j}`} />);
      }
      intersections.push(
        <div
          key={i}
          className={cx({
            boardrow: true,
          })}
        >
          {row}
        </div>,
      );
    }
    return (
      <div
        onClick={this.onClick}
        onTouchStart={this.handler('touchStart')}
        onTouchMove={this.handler('touchMove')}
        onTouchEnd={this.handler('touchEnd')}
        className={cx({
          layer: true,
        })}
      >
        {intersections}
      </div>
    );
  }
}

export default withStyles(s)(EventLayer);
