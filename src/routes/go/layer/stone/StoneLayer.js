import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import GameEngine from 'game-engine';

// eslint-disable-next-line css-modules/no-unused-class
import s from '../BoardLayer.css';
import Intersection from './StoneIntersection';
import utils from '../utils';

const cx = classNames.bind(s);

class StoneLayer extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    boardsize: PropTypes.number.isRequired,
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    listenerRegister: PropTypes.func.isRequired,
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
    ['touchEnd', 'click'].forEach(event => {
      this.props.listenerRegister(event, this.eventHandler(event));
    });
    this.intersection = this.intersection.bind(this);
  }

  eventHandler() {
    return this.props.handleClick;
  }

  intersection(i, j) {
    const temporary =
      !!this.props.temporary &&
      (this.props.temporary.position[0] === i &&
        this.props.temporary.position[1] === j);
    return (
      <Intersection
        key={`${i},${j}`}
        row={i}
        col={j}
        classNames={{
          black:
            this.props.board[i][j] === GameEngine.Go.COLOR.BLACK ||
            (temporary &&
              !!this.props.temporary &&
              this.props.temporary.color === GameEngine.Go.COLOR.BLACK),
          white:
            this.props.board[i][j] === GameEngine.Go.COLOR.WHITE ||
            (temporary &&
              !!this.props.temporary &&
              this.props.temporary.color === GameEngine.Go.COLOR.WHITE),
          temporary,
        }}
      />
    );
  }

  render() {
    return utils.render(this.props.boardsize, cx, this.intersection);
  }
}

export default withStyles(s)(StoneLayer);
