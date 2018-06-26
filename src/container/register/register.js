import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';

import Logo from './../../component/logo/logo';
import { register } from './../../redux/user.redux';

const RadioItem = Radio.RadioItem;

@connect(
  state => state,
  { register }
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '', // 输入用户名
      psw: '', // 输入密码
      repeatPsw: '', // 重复密码
      type: 'ginus' // 角色
    }
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  handleReg() {
    let data = this.state;
    this.props.register(data);
  }
  handleLogin() {
    this.props.history.push('/login');
  }
  render() {
    const { type } = this.state;
    const { user } = this.props;
    console.log(this.props);
    return (
      <div>
        <Logo />
        <div className="err-msg">{user.msg}</div>
        <WingBlank>
          <List>
            <InputItem
              placeholder="请输入用户名"
              onChange={v => this.handleChange('user', v)}
            >用户名：</InputItem>
            <InputItem
              placeholder="请输入密码"
              onChange={v => this.handleChange('psw', v)}
            >密码：</InputItem>
            <InputItem
              placeholder="请确认密码"
              onChange={v => this.handleChange('repeatPsw', v)}
            >重复密码：</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={type === 'ginus'}
              onChange={() => this.handleChange('type', 'ginus')}
            >牛人</RadioItem>
            <RadioItem
              checked={type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >boss</RadioItem>
          </List>
        
          <Button
            type="primary"
            onClick={() => {this.handleReg()}}
          >注册</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={() => {this.handleLogin()}}
          >登录</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register;