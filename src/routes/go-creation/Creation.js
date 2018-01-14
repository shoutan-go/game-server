/**
 * @author lookis on 24/12/2017
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
// import GameEngine from 'game-engine';
import s from './Creation.css';

class Creation extends React.Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rule: 'Go',
      boardsize: 19,
      color: 'black',
    };
    this.submit = this.submit.bind(this);
  }

  handler(id) {
    const self = this;
    // eslint-disable-next-line func-names
    return function(event, index, value) {
      const newState = {};
      newState[id] = value;
      self.setState(newState);
    };
  }

  submit() {
    this.props
      .create(this.state.rule, this.state.boardsize, this.state.color)
      .then(r => {
        console.log(r.data.createGo.id);
        swal('Good job!', r.data.createGo.id, 'success');
      });
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
              <MenuItem value="Go" primaryText="普通" />
              <MenuItem value="CaptureGo" primaryText="吃子棋" />
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
            <SelectField
              id="color"
              floatingLabelText="我方颜色"
              value={this.state.color}
              onChange={this.handler('color')}
            >
              <MenuItem value="black" primaryText="执黑" />
              <MenuItem value="white" primaryText="执白" />
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
