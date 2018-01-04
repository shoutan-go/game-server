/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PassButton.css';

class PassButton extends React.Component {
  handleClick() {
    // if (this.props.board.pass(this.props.color)) {
    //   this.props.sdk.pass(this.props.gameId, this.props.player);
    // }
  }
  render() {
    return (
      <button id="pass-btn" type="button" onClick={this.handleClick}>
        停一手
      </button>
    );
  }
}

export default withStyles(s)(PassButton);
