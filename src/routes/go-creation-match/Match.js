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
import s from './Match.css';

class Match extends React.Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rule: 'Go',
      boardsize: 19,
      expiredIn: 10 * 60,
      handicap: 0,
      komi: 6.5,
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
      newState.komi = 6.5;
    }
    if (value === 'CaptureGo') {
      newState.goal = 1;
      newState.komi = 0;
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
        this.state.handicap,
        this.state.komi,
        this.state.expiredIn,
        typeof this.state.goal === 'number' ? this.state.goal : null,
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
                title: `随机匹配比赛开始，规则：${
                  self.state.rule === 'CaptureGo' ? '吃子棋' : '普通'
                }`,
                link: `${window.location.origin}/match?id=${
                  r.data.createGoMatch.id
                }`,
                imgUrl: `http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64`,
                success: resolve,
              });
              // eslint-disable-next-line no-undef
              wx.onMenuShareAppMessage({
                title: `随机匹配比赛开始，规则：${
                  self.state.rule === 'CaptureGo' ? '吃子棋' : '普通'
                }`,
                desc: `${self.state.boardsize}路，贴${self.state.komi}目，让${
                  self.state.handicap
                }子`,
                link: `${window.location.origin}/match?id=${
                  r.data.createGoMatch.id
                }`,
                imgUrl: `http://wx.qlogo.cn/mmopen/jj4e65x0Px2ibxI8cBsLdxueOibCLrqHvg9U91Dvk0ohjQHgO2dias3LiaHazszmh0CJX4xhknnfwibqwDwWfCBaVPslgIcyBG81A/64`,
                success: resolve,
              });
            });
          },
        });
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
              id="komi"
              floatingLabelText="贴目"
              value={this.state.komi}
              onChange={this.handleGeneral('komi')}
            >
              <MenuItem value={0} primaryText="0目" />
              <MenuItem value={5.5} primaryText="5.5目" />
              <MenuItem value={6.5} primaryText="6.5目" />
            </SelectField>
            <br />
            <SelectField
              id="expiredIn"
              floatingLabelText="随机匹配周期"
              value={this.state.expiredIn}
              onChange={this.handleGeneral('expiredIn')}
            >
              <MenuItem value={60 * 10} primaryText="10分钟" />
              <MenuItem value={60 * 20} primaryText="20分钟" />
              <MenuItem value={60 * 30} primaryText="30分钟" />
              <MenuItem value={60 * 45} primaryText="45分钟" />
              <MenuItem value={60 * 60} primaryText="60分钟" />
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

export default withStyles(s)(Match);
