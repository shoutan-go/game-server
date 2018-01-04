/**
 * @author lookis on 24/12/2017
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert2';
import GameEngine from 'game-engine';
import s from './Creation.css';

class Creation extends React.Component {
  state = {
    rule: 'normal',
    boardsize: 19,
  };

  handler(id) {
    const self = this;
    return function(event, index, value) {
      const newState = {};
      newState[id] = value;
      self.setState(newState);
    };
  }

  submit() {
    swal('Good job!', 'You clicked the button!', 'success');
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>规则设定</div>
          <div className={s.body}>
            <SelectField
              id="rule"
              floatingLabelText="规则"
              value={this.state.rule}
              onChange={this.handler('rule')}
            >
              <MenuItem value={'normal'} primaryText="普通" />
              <MenuItem value={'capture'} primaryText="吃子棋" />
            </SelectField>
            <br />
            <SelectField
              id="boardsize"
              floatingLabelText="棋盘"
              value={this.state.boardsize}
              onChange={this.handler('boardsize')}
            >
              <MenuItem value={9} primaryText="9路" />
              <MenuItem value={13} primaryText="13路" />
              <MenuItem value={19} primaryText="19路" />
            </SelectField>
            <div className={s.submit}>
              <RaisedButton
                label="发起挑战"
                primary
                fullWidth
                onClick={this.submit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Creation);
