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
      color: 0,
      result: null,
    };
    this.engine = null;
    this.game.init = this.game.init.bind(this);
    this.game.append = this.game.append.bind(this);

    this.handler.pass = this.handler.pass.bind(this);
    this.handler.resign = this.handler.resign.bind(this);
    this.handler.click = this.handler.click.bind(this);
    this.handler.confirm = this.handler.confirm.bind(this);

    this.connection.message = this.connection.message.bind(this);
  }

  game = {
    init: theGame => {
      this.engine = new GameEngine[theGame.engine](theGame.info, theGame.moves);
    },
    append: move => {
      this.engine[move.type](
        move.color,
        move.position && move.position[0],
        move.position && move.position[1],
      );
    },
  };

  handler = {
    pass: () => {
      if (this.engine.currentColor() === this.state.color) {
        this.engine.pass(this.state.color);
        this.websocket.sendMessage({
          color: this.state.color,
          type: 'pass',
        });
      }
    },
    resign: () => {
      if (this.engine.currentColor() === this.state.color) {
        this.engine.resign(this.state.color);
        this.websocket.sendMessage({
          color: this.state.color,
          type: 'resign',
        });
      }
    },
    click: (i, j) => {
      if (
        this.engine.currentColor() === this.state.color &&
        this.engine.rules(this.state.color, i, j)
      ) {
        this.engine.play(this.state.color, i, j);
        this.websocket.sendMessage({
          color: this.state.color,
          type: 'play',
          position: [i, j],
        });
      }
    },
    confirm: () => {},
  };

  connection = {
    message: msg => {
      if (msg && msg.code === 'ok') {
        switch (msg.type) {
          case 'init':
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
        {typeof window !== 'undefined' ? (
          <WebSocket
            onMessage={this.connection.message}
            url={`ws://${window.location.host}/channel/${this.props.id}`}
            reconnectIntervalInMilliSeconds={100}
            ref={Websocket => {
              this.websocket = Websocket;
            }}
          />
        ) : (
          <div />
        )}

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
