import React, { Component } from 'react';

import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';

import Logo from './../../component/logo/logo';
const RadioItem = Radio.RadioItem;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      psw: '',
      type: 'ginus'
    }
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  handleReg() {
    this.props.history.push('/register');
  }
  handleLogin() {
    console.log(this.state);
  }
  render() {
    const { type } = this.state;
    return (
      <div>
        <Logo />
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

export default Login;