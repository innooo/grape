const mongoose = require('mongoose');

// 链接mongodb
const DB_URL = 'mongodb://localhost:27017/grape-chat';
mongoose.connect(DB_URL);

const models = {
  // 用户信息
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    'avatar': {type: String},
    'desc': {type: String},  // 简介
    'title': {type: String}, // 职位
    // 如果角色是boss则需要额外字段
    'company': {type: String}, // 公司
    'money': {type: String}
  },
  // 聊天信息
  chat: {

  }
}

for(let m in models) { // 写入数据库
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel(name) {
    return mongoose.model(name);
  }
}