import axios from 'axios';
import { getRedirectPath } from './../utils';

const initialState = {
  redirectTo: '', // 注册成功之后需要跳转的路径
  isAuth: false,
  user: '',
  pwd: '',
  type: '',
  msg: ''
}
// 定义action类型常量
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERR_MSG = 'ERR_MSG';
// reducer
export const user = (state = initialState, action) => {
  let newState = state;
  switch(action.type) {
    case REGISTER_SUCCESS:
      newState = {...state, isAuth: true, redirectTo: getRedirectPath(action.payload), msg: '', ...action.payload};
      break;
    case ERR_MSG:
      newState = {...state, isAuth: false, ...action.payload};
      break;
    case LOGIN_SUCCESS:
      newState = {...state, isAuth: true, redirectTo: getRedirectPath(action.payload), msg: '', ...action.payload};
      break;
    default:
      break;
  }
  return newState;
};

// action creator
const errMsg = (msg) => { // 改变状态中的msg属性值
  return {
    type: ERR_MSG,
    payload: msg
  }
};

const registerSuccess = payload => { // 注册成功
  return {
    payload,
    type: REGISTER_SUCCESS
  }
};

const loginSuccess = payload => { // 登录成功
  return {
    payload,
    type: LOGIN_SUCCESS
  }
}

export const register = ({user, pwd, repeatPwd, type}) => { /**type标识角色是boss还是牛人 */
  if(!user || !pwd || !repeatPwd || !type) { // 校验必填
    return errMsg({msg: '请将信息填写完整'});
  }else {
    return dispatch => {
      axios.post('/user/register',{user, pwd, repeatPwd, type}).then((res) => {
        const data = res.data;
        if(res.status === 200) {
          if(data.code === 0){
            dispatch(registerSuccess({user, pwd, type, ...data}));
          }else {
            dispatch(errMsg(data.msg));
          }
        }
      });
    }
  }
};

export const login = ({user, pwd}) => { /**type标识角色是boss还是牛人 */
  if(!user || !pwd) { // 校验必填
    return errMsg({msg: '请将信息填写完整'});
  }else {
    return dispatch => {
      axios.post('/user/login',{user, pwd}).then((res) => {
        const data = res.data;
        if(res.status === 200) {
          if(data.code === 0){
            dispatch(loginSuccess({user, pwd, ...data}));
          }else {
            dispatch(errMsg(data.msg));
          }
        }
      });
    }
  }
};