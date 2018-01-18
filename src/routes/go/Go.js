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
import ConfirmButton from './ConfirmButton';
import PassButton from './PassButton';
import ResignButton from './ResignButton';
import s from './Go.css';

import Layer from './layer/Layer';

const regex = new RegExp('^([B|W])\\+([\\d|R|\\.]+)');

class Go extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    boardsize: PropTypes.number.isRequired,
    user: PropTypes.string,
  };

  static defaultProps = {
    user: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      board: Array(this.props.boardsize).fill(
        Array(this.props.boardsize).fill(0),
      ),
      black: {
        id: '',
        name: '[BLACK]',
        avatar: null,
        captured: 0,
      },
      white: {
        id: '',
        name: '[WHITE]',
        avatar: null,
        captured: 0,
      },
      turn: GameEngine.Go.COLOR.EMPTY,
      color: GameEngine.Go.COLOR.EMPTY,
      temporary: null,
      result: null,
    };
    this.engine = null;
    this.game.init = this.game.init.bind(this);
    this.game.append = this.game.append.bind(this);
    this.game.result = this.game.result.bind(this);

    this.handler.pass = this.handler.pass.bind(this);
    this.handler.resign = this.handler.resign.bind(this);
    this.handler.click = this.handler.click.bind(this);
    this.handler.confirm = this.handler.confirm.bind(this);

    this.connection.message = this.connection.message.bind(this);
  }

  game = {
    init: theGame => {
      this.engine = new GameEngine[theGame.engine](theGame.info, theGame.moves);
      this.game.update();
    },
    append: move => {
      this.engine[move.type](
        move.color,
        move.position && move.position[0],
        move.position && move.position[1],
      );
      this.game.update();
    },
    result: r => {
      this.setState({
        result: r,
      });
    },
    update: () => {
      this.setState({
        board: this.engine.board,
        black: {
          id: this.engine.info.black.id,
          name: this.engine.info.black.name,
          avatar: this.engine.info.black.avatar,
          captured: this.engine.captured[GameEngine.Go.COLOR.BLACK],
        },
        white: {
          id: this.engine.info.white.id,
          name: this.engine.info.white.name,
          avatar: this.engine.info.white.avatar,
          captured: this.engine.captured[GameEngine.Go.COLOR.WHITE],
        },
        turn: this.engine.currentColor(),
        result: this.engine.info.result,
        color:
          // eslint-disable-next-line no-nested-ternary
          this.props.user === this.engine.info.black.id
            ? GameEngine.Go.COLOR.BLACK
            : this.props.user === this.engine.info.white.id
              ? GameEngine.Go.COLOR.WHITE
              : GameEngine.Go.COLOR.EMPTY,
      });
    },
  };

  handler = {
    pass: () => {
      if (this.engine.currentColor() === this.state.color) {
        // this.engine.pass(this.state.color);
        this.websocket.sendMessage(
          JSON.stringify({
            color: this.state.color,
            type: 'pass',
          }),
        );
      }
    },
    resign: () => {
      if (this.engine.currentColor() === this.state.color) {
        // this.engine.resign(this.state.color);
        this.websocket.sendMessage(
          JSON.stringify({
            color: this.state.color,
            type: 'resign',
          }),
        );
      }
    },
    click: (i, j) => {
      if (
        this.engine.currentColor() === this.state.color &&
        this.engine.rules(this.state.color, i, j)
      ) {
        this.setState({
          temporary: {
            color: this.state.color,
            position: [i, j],
          },
        });
      }
    },
    confirm: () => {
      if (this.state.temporary) {
        this.websocket.sendMessage(
          JSON.stringify({
            color: this.state.temporary.color,
            type: 'play',
            position: this.state.temporary.position,
          }),
        );
        this.setState({
          temporary: null,
        });
      }
    },
  };

  connection = {
    message: msg => {
      const data = JSON.parse(msg);
      if (data && data.code === 'ok') {
        console.log(data);
        switch (data.type) {
          case 'init':
            this.game.init(data.game);
            break;
          case 'delta':
            this.game.append(data.move);
            break;
          case 'result':
            this.game.result(data.result);
            break;
          default:
            break;
        }
      }
    },
  };

  render() {
    const match = this.state.result ? this.state.result.match(regex) : null;
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
        {this.props.user &&
        (this.props.user === this.state.black.id ||
          this.props.user === this.state.white.id) &&
        !this.state.result ? (
          <ConfirmButton
            handleConfirm={this.handler.confirm}
            disable={!this.state.temporary}
          />
        ) : (
          <div className={s.scoreboard}>
            {match
              ? `${match[1] === 'W' ? '白' : '黑'}胜${
                  match[2] === 'R' ? '，对方投降' : `${match[2]}目`
                }`
              : ''}
          </div>
        )}
        <Layer boardsize={this.state.board.length} />
        {this.props.user &&
        (this.props.user === this.state.black.id ||
          this.props.user === this.state.white.id) &&
        !this.state.result ? (
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
