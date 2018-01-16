/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import GameEngine from 'game-engine';
// eslint-disable-next-line css-modules/no-unused-class
import s from './BoardIntersection.css';

const cx = classNames.bind(s);

class BoardIntersection extends React.Component {
  static propTypes = {
    highlight: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    temporary: PropTypes.number,
    color: PropTypes.number,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    last: PropTypes.bool,
  };

  static defaultProps = {
    color: 0,
    last: false,
    temporary: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      style: {
        height: this.divElement.clientHeight,
      },
    });
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        ref={divElement => {
          this.divElement = divElement;
        }}
        style={this.state.style}
        data-offset-x={this.props.row}
        data-offset-y={this.props.col}
        onClick={this.props.handleClick}
        className={cx({
          intersection: true,
          highlight: this.props.highlight,
          black:
            this.props.color === GameEngine.Go.COLOR.BLACK ||
            this.props.temporary === GameEngine.Go.COLOR.BLACK,
          white:
            this.props.color === GameEngine.Go.COLOR.WHITE ||
            this.props.temporary === GameEngine.Go.COLOR.WHITE,
          lastIntersection: this.props.last,
          temporary: !!this.props.temporary,
        })}
      />
    );
  }
}

export default withStyles(s)(BoardIntersection);
