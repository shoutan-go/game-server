/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import BackgroundLayer from './background/BackgroundLayer';
import LineLayer from './line/LineLayer';
import HighlightLayer from './highlight/HighlightLayer';
import StoneLayer from './stone/StoneLayer';
import MoveLayer from './move/MoveLayer';
import EventLayer from './event/EventLayer';
import css from './Layer.css';

class Layer extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
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
    this.listener = {};
    this.events = {};
    this.listenerRegister = this.listenerRegister.bind(this);
    this.handler = this.handler.bind(this);
  }

  handler(event) {
    const self = this;
    return (i, j) => {
      if (
        !self.events[event] ||
        self.events[event][0] !== i ||
        self.events[event][1] !== j
      ) {
        self.events[event] = [i, j];
        if (self.listener[event] && self.listener[event].length > 0) {
          self.listener[event].forEach(listener => {
            listener(i, j);
          });
        }
      }
    };
  }

  listenerRegister(event, listener) {
    this.listener[event] = this.listener[event] || [];
    this.listener[event].push(listener);
  }

  render() {
    return (
      <div className={css.layers}>
        <BackgroundLayer />
        <HighlightLayer
          boardsize={this.props.board.length}
          listenerRegister={this.listenerRegister}
        />
        <LineLayer boardsize={this.props.board.length} />
        <StoneLayer
          boardsize={this.props.board.length}
          listenerRegister={this.listenerRegister}
          board={this.props.board}
          handleClick={this.props.handleClick}
          temporary={this.props.temporary}
        />
        <MoveLayer
          boardsize={this.props.board.length}
          board={this.props.board}
          moves={this.props.moves}
        />
        <EventLayer
          boardsize={this.props.board.length}
          click={this.handler('click')}
          touchStart={this.handler('touchStart')}
          touchMove={this.handler('touchMove')}
          touchEnd={this.handler('touchEnd')}
        />
      </div>
    );
  }
}

export default withStyles(css)(Layer);
