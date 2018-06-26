const express = require('express');

const Router = express.Router();

const model = require('./model');

const User = model.getModel('user');

const utils = require('utility');

Router.get('/info', (req, res) => {
  return res.json({code: 1});
});

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body;
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1});
    }else {
      User.create({user: user, pwd: md5Pwd(pwd), type}, (e, d) => {
        if(e) {
          return res.json({code: 1, msg: '服务器出错'});
        }
        return res.json({code: 0});
      })
    }
  })
});

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc);
  })
})

// 用户名密码 md5加密
function md5Pwd(pwd) {
  let salt = 'react_project_is_bad&*--@#helloworld';
  return utils.md5(utils.md5(pwd + salt));
}
module.exports = Router;