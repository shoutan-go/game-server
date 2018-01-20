/**
 * @author lookis on 20/01/2018
 */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames/bind';

// eslint-disable-next-line css-modules/no-unused-class
import s from './Toolbar.css';

const cx = classNames.bind(s);

class Toolbar extends React.Component {
  static propTypes = {
    observer: PropTypes.bool.isRequired,
    maxMoves: PropTypes.number.isRequired,
    handlePass: PropTypes.func.isRequired,
    handleResign: PropTypes.func.isRequired,
    changeMoves: PropTypes.func.isRequired,
    toggleMoves: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMove: 0,
    };

    this.setMoves = this.setMoves.bind(this);
  }

  setMoves(moves) {
    this.props.changeMoves(moves);
    this.setState({
      currentMove: moves,
    });
  }

  deltaMoves(moves) {
    return () => {
      this.props.changeMoves(this.state.currentMove + moves);
      this.setState({
        currentMove: this.state.currentMove + moves,
      });
    };
  }

  render() {
    if (this.props.observer) {
      return (
        <div className={s.toolbar}>
          <div>
            <Slider
              min={0}
              max={this.props.maxMoves}
              step={1}
              value={this.state.currentMove}
              onChange={this.setMoves}
            />
          </div>
          <div className={s.buttonGroup}>
            <button
              type="button"
              onClick={this.deltaMoves(-1)}
              className={cx({
                button: true,
              })}
              disabled={this.state.currentMove === 0}
            >
              前一手
            </button>
            <button
              type="button"
              onClick={this.deltaMoves(1)}
              className={cx({
                button: true,
              })}
              disabled={this.state.currentMove === this.props.maxMoves}
            >
              后一手
            </button>
            <button
              type="button"
              onClick={this.props.toggleMoves}
              className={cx({
                button: true,
              })}
            >
              开关手数
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className={s.buttonGroup}>
        <button
          type="button"
          onClick={this.props.handlePass}
          className={cx({
            button: true,
          })}
        >
          停一手
        </button>
        <button
          type="button"
          onClick={this.props.handleResign}
          className={cx({
            button: true,
          })}
        >
          认输
        </button>
      </div>
    );
  }
}

export default withStyles(s)(Toolbar);
