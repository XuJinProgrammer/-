//导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
// app对象
const app = express();
app.engine('html', require('express-art-template'));
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(router);
app.listen('12345', () => {
  console.log('监听端口12345启动服务器成功');
})