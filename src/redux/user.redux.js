import axios from 'axios';

const initialState = {
  isAuth: false,
  user: '',
  pwd: '',
  msg: ''
}
// 定义action类型常量
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERR_MSG = 'ERR_MSG';
// reducer
export const user = (state = initialState, action) => {
  let newState = state;
  switch(action.type) {
    case REGISTER_SUCCESS:
      newState = {...state, isAuth: true, msg: '', ...action.payload};
      break;
    case ERR_MSG:
      newState = {...state, isAuth: false, ...action.payload};
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

const registerSuccess = (payload) => { // 注册成功
  return {
    payload,
    type: REGISTER_SUCCESS
  }
};

export const register = ({user, pwd, repeatPwd, type}) => { /**type标识角色是boss还是牛人 */
  if(!user || !pwd || !repeatPwd || !type) { // 校验必填
    return errMsg({msg: '请将信息填写完整'});
  }else {
    return dispatch => {
      axios.post('/user/register').then((res) => {
        const data = res.data;
        if(res.status === 200) {
          if(data.code === 0){
            dispatch(registerSuccess(data));
          }else {
            dispatch(errMsg(data.msg));
          }
        }
      });
    }
  }
};
