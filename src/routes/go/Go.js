/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import GameEngine from 'game-engine';

import Board from './Board';
import PassButton from './PassButton';
import ResignButton from './ResignButton';
import gameQuery from './game.graphql';
import s from './Go.css';

class Go extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      game: PropTypes.shape({
        rule: PropTypes.string.isRequired,
        color: PropTypes.number,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.connector = null;
    this.state = {
      board: null,
      black: {
        name: null,
        avatar: null,
        captured: 10,
      },
      white: {
        name: null,
        avatar: null,
        captured: 50,
      },
      turn: GameEngine.Go.COLOR.BLACK,
    };
  }

  render() {
    const {
      data: { loading, game: { rule, color } },
    } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="gameinfo">
          <div className="player">
            <img
              className="avatar"
              width="64"
              height="64"
              src={this.state.blackInfo.headImg}
            />
            <div className="info">
              <span
                className={`name ${
                  this.state.board.currentColor() === GameEngine.Go.COLOR.BLACK
                    ? 'active'
                    : ''
                }`}
              >
                {this.state.blackInfo.name}
              </span>
              <span className="deadstone">
                {this.state.board.captured[GameEngine.Go.COLOR.BLACK]} 提子
              </span>
            </div>
          </div>
          <div className="player">
            <img
              className="avatar"
              width="64"
              height="64"
              src={this.state.whiteInfo.headImg}
            />
            <div className="info">
              <span
                className={`name ${
                  this.state.board.currentColor() === GameEngine.Go.COLOR.WHITE
                    ? 'active'
                    : ''
                }`}
              >
                {this.state.whiteInfo.name}
              </span>
              <span className="deadstone">
                {this.state.board.captured[GameEngine.Go.COLOR.WHITE]} 提子
              </span>
            </div>
          </div>
        </div>

        <Board
          board={this.state.board}
          boardsize={this.state.board.info.boardsize}
          color={this.state.color}
          player={this.state.player}
          sdk={this.props.sdk}
          gameId={this.state.gameId}
        />
        {this.state.color &&
          this.state.player &&
          !this.state.board.info.result && (
            <div className="action">
              <PassButton
                board={this.state.board}
                color={this.state.color}
                player={this.state.player}
                sdk={this.props.sdk}
                gameId={this.state.gameId}
              />
              <ResignButton
                board={this.state.board}
                color={this.state.color}
                player={this.state.player}
                sdk={this.props.sdk}
                gameId={this.state.gameId}
              />
            </div>
          )}
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(gameQuery, {
    options: ({ id }) => ({ variables: { id } }),
  }),
)(Go);
