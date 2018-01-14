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
    temporary: PropTypes.shape({
      color: PropTypes.number.isRequired,
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  };

  static defaultProps = {
    temporary: null,
  };

  constructor(props) {
    super(props);
    this.state = { highlight: [] };
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverEnd = this.handleHoverEnd.bind(this);
  }

  handleHover(e) {
    e.preventDefault();
    const { clientX, clientY } = e.changedTouches[0];
    const target = document.elementFromPoint(clientX, clientY);
    this.setState({
      highlight: [
        parseInt(target.getAttribute('data-offset-x'), 10),
        parseInt(target.getAttribute('data-offset-y'), 10),
      ],
    });
  }

  handleHoverEnd(e) {
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
            highlight={
              j === this.state.highlight[1] || i === this.state.highlight[0]
            }
            temporary={
              this.props.temporary &&
              this.props.temporary.position[0] === i &&
              this.props.temporary.position[1] === j
                ? this.props.temporary.color
                : null
            }
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
