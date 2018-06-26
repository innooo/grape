import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// ui组件引用
import AuthRouter from './component/authrouter/authrouter';
import Login from './container/login/login';
import Register from './container/register/register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthRouter /> {/* 用于进行登录验证、身份验证等一系列验证 */}
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {/* <Redirect to="/dashboard" /> */}
        </div>
      </Router>
    );
  }
}

export default App;
