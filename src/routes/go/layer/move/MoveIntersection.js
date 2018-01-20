/**
 * @author lookis on 17/01/2018
 */
import React from 'react';
import classNames from 'classnames/bind';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import GameEngine from 'game-engine';
// eslint-disable-next-line css-modules/no-unused-class
import s from './MoveIntersection.css';

const cx = classNames.bind(s);

class MoveIntersection extends React.Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    stone: PropTypes.number.isRequired,
    boardsize: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      style: {
        height: this.element.clientHeight,
      },
    });
  }

  render() {
    return (
      <div
        ref={element => {
          this.element = element;
        }}
        style={this.state.style}
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        className={cx({
          intersection: true,
        })}
      >
        <div
          style={{
            transform: `translateY(-30%) scale(calc(1.6 - ${this.props
              .boardsize / 20}))`,
          }}
          className={cx({
            number: true,
            black: this.props.stone === GameEngine.Go.COLOR.WHITE,
            white: this.props.stone === GameEngine.Go.COLOR.BLACK,
          })}
        >
          {this.props.value !== 0 ? this.props.value : ''}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MoveIntersection);
