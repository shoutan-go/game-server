/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BoardIntersection from './BoardIntersection';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Board.css';
// eslint-disable-next-line css-modules/no-unused-class
import inter from './BoardIntersection.css';

const cx = classNames.bind(s);

class Board extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { highlight: [] };
  }

  handleHover(e) {
    e.preventDefault();
    const { clientX, clientY } = e.changedTouches[0];
    const target = document.elementFromPoint(clientX, clientY);
    this.setState({
      highlight: [
        target.getAttribute('data-offset-x'),
        target.getAttribute('data-offset-y'),
      ],
    });
  }

  handleHoverEnd(e) {
    e.preventDefault();
    const { clientX, clientY } = e.changedTouches[0];
    const target = document.elementFromPoint(clientX, clientY);
    if (target.className.includes(inter.intersection)) {
      target.click();
    }
    this.setState({
      highlight: [],
    });
  }

  render() {
    const intersections = [];
    for (let i = 0; i < this.props.board.length; i += 1) {
      const row = [];
      for (let j = 0; j < this.props.board.length; j += 1) {
        row.push(
          <BoardIntersection
            key={j}
            highlight={j === this.state.highlight[1]}
            color={this.props.board[i][j]}
            row={i}
            col={j}
            handleClick={() => {
              this.props.handleClick(i, j);
            }}
            last={i === this.props.board.length - 1}
          />,
        );
      }
      intersections.push(
        <div
          className={cx({
            boardrow: true,
            highlight: i === this.state.highlight[0],
          })}
          key={i}
        >
          {row}
        </div>,
      );
    }
    return (
      <div
        className={s.board}
        onTouchStart={this.handleHover}
        onTouchMove={this.handleHover}
        onTouchEnd={this.handleHoverEnd}
        id="board"
      >
        {intersections}
      </div>
    );
  }
}

export default withStyles(s, inter)(Board);
