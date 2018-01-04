/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import GameEngine from 'game-engine';
import s from './BoardIntersection.css';

const cx = classNames.bind(s);

class BoardIntersection extends React.Component {
  static propTypes = {
    highlight: PropTypes.bool.isRequired,
    color: PropTypes.number,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  };

  static defaultProps = {
    color: 0,
  };

  static contextTypes = {
    engine: PropTypes.shape.isRequired,
    connector: PropTypes.shape.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    // if (
    //   this.props.board.play(
    //     this.props.color,
    //     this.props.row,
    //     // eslint-disable-next-line prettier/prettier
    //     this.props.col
    //   ) !== false
    // ) {
    //   this.props.sdk.play(
    //     this.props.gameId,
    //     this.props.player,
    //     this.props.row,
    //     // eslint-disable-next-line prettier/prettier
    //     this.props.col
    //   );
    // }
  }

  render() {
    const classes = cx({
      intersection: true,
      highlight: this.props.highlight,
      black: this.props.color === GameEngine.Go.COLOR.BLACK,
      white: this.props.color === GameEngine.Go.COLOR.WHITE,
    });
    return (
      <div
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        onClick={this.handleClick}
        className={classes}
      />
    );
  }
}

export default withStyles(s)(BoardIntersection);
