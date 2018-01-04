/**
 * @author lookis on 26/12/2017
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ResignButton.css';

class ResignButton extends React.Component {
  handleClick() {
    // if (this.props.board.resign(this.props.color)) {
    //   this.props.sdk.resign(this.props.gameId, this.props.player);
    // }
  }
  render() {
    return (
      <button id="resign-btn" type="button" onClick={this.handleClick}>
        认输
      </button>
    );
  }
}

export default withStyles(s)(ResignButton);
