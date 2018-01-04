/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import BoardIntersection from './BoardIntersection';
import s from './Board.css';

class Board extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    if (target.className.includes('intersection')) {
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
            currentColor={this.props.board[i][j]}
            board={this.props.board}
            player={this.props.player}
            row={i}
            col={j}
            color={this.props.color}
            sdk={this.props.sdk}
            gameId={this.props.id}
            // eslint-disable-next-line prettier/prettier
          />
        );
      }
      if (i === this.state.highlight[0]) {
        intersections.push(
          <div className="boardrow highlight" key={i}>
            {row}
          </div>,
        );
      } else {
        intersections.push(
          <div className="boardrow" key={i}>
            {row}
          </div>,
        );
      }
    }
    return (
      <div
        className="board"
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

export default withStyles(s)(Board);
