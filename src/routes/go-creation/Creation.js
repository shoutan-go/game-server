/**
 * @author lookis on 24/12/2017
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
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
      goal: null,
      goalErrorText: null,
    };
    this.submit = this.submit.bind(this);
    this.handleRule = this.handleRule.bind(this);
    this.handleGoal = this.handleGoal.bind(this);
  }

  handleRule(event, index, value) {
    const newState = {};
    newState.rule = value;
    if (value === 'Go') {
      newState.goal = null;
    }
    if (value === 'CaptureGo') {
      newState.goal = 1;
    }
    this.setState(newState);
  }

  handleGoal(event, value) {
    const newState = {};
    if (!parseInt(value, 10) || parseInt(value, 10) <= 0) {
      newState.goalErrorText = '必须为数字且大于0';
      newState.goal = value;
    } else {
      newState.goal = parseInt(value, 10);
      newState.goalErrorText = null;
    }
    this.setState(newState);
  }

  handleGeneral(id) {
    const self = this;
    // eslint-disable-next-line func-names
    return function(event, index, value) {
      const newState = {};
      newState[id] = value;
      self.setState(newState);
    };
  }

  submit() {
    const self = this;
    this.props
      .create(
        this.state.rule,
        this.state.boardsize,
        this.state.color,
        typeof this.state.goal === 'number' ? this.state.goal : 1,
      )
      .then(r => {
        swal({
          type: 'success',
          title: '对局创建成功！',
          text: '点击右上角分享把对局请求发给对手',
          showConfirmButton: false,
          allowOutsideClick: false,
          onOpen() {
            swal.clickConfirm();
          },
          preConfirm() {
            return new Promise(resolve => {
              // eslint-disable-next-line no-undef
              wx.onMenuShareTimeline({
                title: `听说你围棋下的不错，我执${
                  self.state.color === 'black' ? '黑' : '白'
                }，来一局？`,
                link: `${window.location.origin}/go?id=${
                  r.data.createGo.id
                }&invite=${self.state.color === 'black' ? 'white' : 'black'}`,
                imgUrl: `http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64`,
                success: resolve,
              });
              // eslint-disable-next-line no-undef
              wx.onMenuShareAppMessage({
                title: `听说你围棋下的不错，我执${
                  self.state.color === 'black' ? '黑' : '白'
                }，来一局？`,
                desc: `${self.state.boardsize}路，贴6.5目，让0子`,
                link: `${window.location.origin}/go?id=${
                  r.data.createGo.id
                }&invite=${self.state.color === 'black' ? 'white' : 'black'}`,
                imgUrl: `http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64`,
                success: resolve,
              });
            }).then(() => {
              window.location.href = `${window.location.origin}/go?id=${
                r.data.createGo.id
              }`;
            });
          },
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>规则设定</div>
          <div className={s.body}>
            <SelectField
              id="rule"
              floatingLabelText="规则"
              value={this.state.rule}
              onChange={this.handleRule}
            >
              <MenuItem value="Go" primaryText="普通" />
              <MenuItem value="CaptureGo" primaryText="吃子棋" />
            </SelectField>
            {this.state.goal !== null && <br />}
            {this.state.goal !== null && (
              <TextField
                floatingLabelFixed
                floatingLabelText="吃子目标"
                value={this.state.goal}
                errorText={this.state.goalErrorText}
                onChange={this.handleGoal}
              />
            )}
            <br />
            <SelectField
              id="boardsize"
              floatingLabelText="棋盘"
              value={this.state.boardsize}
              onChange={this.handleGeneral('boardsize')}
            >
              <MenuItem value={9} primaryText="9路" />
              <MenuItem value={13} primaryText="13路" />
              <MenuItem value={19} primaryText="19路" />
            </SelectField>
            <br />
            <SelectField
              id="color"
              floatingLabelText="我方颜色"
              value={this.state.color}
              onChange={this.handleGeneral('color')}
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
