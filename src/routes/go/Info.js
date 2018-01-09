/**
 * @author lookis on 24/12/2017
 */
import React from 'react';
import { compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import GameEngine from 'game-engine';

// eslint-disable-next-line css-modules/no-unused-class
import s from './Info.css';

const cx = classNames.bind(s);

class Info extends React.Component {
  static propTypes = {
    black: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      captured: PropTypes.number,
    }).isRequired,
    white: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      captured: PropTypes.number,
    }).isRequired,
    turn: PropTypes.number,
  };

  static defaultProps = {
    turn: GameEngine.Go.COLOR.EMPTY,
  };

  render() {
    return (
      <div className={s.gameinfo}>
        <div className={s.player}>
          <img
            alt="avatar_url"
            width="64"
            height="64"
            src={this.props.black.avatar}
          />
          <div className={s.info}>
            <span
              className={cx({
                name: true,
                active: this.props.turn === GameEngine.Go.COLOR.BLACK,
              })}
            >
              {this.props.black.name}
            </span>
            <span>
              {this.props.black.captured} 提子
            </span>
          </div>
        </div>
        <div className={s.player}>
          <img
            alt="avatar_url"
            width="64"
            height="64"
            src={this.props.white.avatar}
          />
          <div className={s.info}>
            <span
              className={cx({
                name: true,
                active: this.props.turn === GameEngine.Go.COLOR.WHITE,
              })}
            >
              {this.props.white.name}
            </span>
            <span>
              {this.props.white.captured} 提子
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s))(Info);
