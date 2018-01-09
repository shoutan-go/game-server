/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import GameEngine from 'game-engine';
import WebSocket from 'react-websocket';

import Info from './Info';
import Board from './Board';
import ConfirmButton from './ConfirmButton';
import PassButton from './PassButton';
import ResignButton from './ResignButton';
import s from './Go.css';

class Go extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    player: PropTypes.string,
  };

  static defaultProps = {
    player: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      board: Array(19).fill(Array(19).fill(0)),
      black: {
        name: '[BLACK]',
        avatar: null,
        captured: 0,
      },
      white: {
        name: '[WHITE]',
        avatar: null,
        captured: 0,
      },
      turn: GameEngine.Go.COLOR.EMPTY,
      result: null,
    };
    this.engine = null;
  }

  game = {
    init: theGame => {},
    append: move => {},
  };

  handler = {
    pass: () => {},
    resign: () => {},
    click: () => {},
    confirm: () => {},
  };

  connection = {
    message: msg => {
      if (msg && msg.code === 'ok') {
        switch (msg.type) {
          case 'init':
            this.engine = GameEngine[msg.engine];
            this.game.init(msg.game);
            break;
          case 'delta':
            this.game.append(msg.move);
            break;
          default:
            break;
        }
      } else {
        // console.log(`Error:${msg}`);
      }
    },
  };

  render() {
    return (
      <div className={s.container}>
        <WebSocket
          onMessage={this.connection.message}
          url={`/connection/${this.props.id}`}
          reconnectIntervalInMilliSeconds={100}
        />
        <Info
          black={this.state.black}
          white={this.state.white}
          turn={this.state.turn}
        />
        {this.props.player ? (
          <ConfirmButton handleConfirm={this.handler.confirm} disable={false} />
        ) : (
          <div />
        )}
        <Board board={this.state.board} handleClick={this.handler.click} />
        {this.props.player && !this.state.result ? (
          <div className={s.action}>
            <PassButton handlePass={this.handler.pass} />
            <ResignButton handleResign={this.handler.resign} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default compose(withStyles(s))(Go);
