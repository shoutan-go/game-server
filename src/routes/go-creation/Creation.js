/**
 * @author lookis on 24/12/2017
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import s from './Creation.css';

class Creation extends React.Component {
  state = {
    rule: 'normal',
    boardsize: 19,
  };

  handler(id) {
    const self = this;
    return function(event, index, value) {
      console.log(({}[id] = value));
      self.setState(({}[id] = value));
    };
  }

  render() {
    return (
      <div>
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
          onChange={this.handleChange}
        >
          <MenuItem value={9} primaryText="9路" />
          <MenuItem value={13} primaryText="13路" />
          <MenuItem value={19} primaryText="19路" />
        </SelectField>
        <br />
      </div>
    );
  }
}

export default withStyles(s)(Creation);
