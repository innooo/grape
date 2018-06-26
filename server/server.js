const express = require('express');
const app = express();
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser());
app.use('/user', userRouter); // 开启中间件，如果是路由，则第一个参数是路径前缀，如果路径以/user开始，则其子路由由userRouter定义

// 监听端口
app.listen(9093, () => {
  console.log('Node app listen at 9093');
});