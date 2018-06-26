import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter // 使用withRouter包装AuthRouter使得AuthRouter中能够获取到路由信息

class AuthRouter extends Component {
  componentDidMount() {
    // 进行登录状态、目前的url地址（登录页面不需要跳转）用户身份、用户信息是否完善等的验证
    const publicName = ['/register', '/login'];
    const pathName = this.props.location.path;
    if(publicName.indexOf(pathName) === -1) { // 如果当前不在登录页面，则从后台获取用户信息
      axios.get('/user/info').then((res) => {
        if(res.status === 200) {
          let data = res.data;
          console.log(data);
          if(data.code === 0) { // 处于登录状态

          }else { // 没有处于登录状态
            console.log(this.props);
            this.props.history.push('/login');
          }
        }
      });
    }
  }
  render() {
    return null;
  }
}

export default AuthRouter;