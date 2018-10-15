const m_user = require('../modles/m_user');
const showSignin = (req, res) => {
  res.render('signin.html');
}
const handleSingin = (req, res) => {
  const body = req.body;
  m_user.checkEmail(body.email, (err, data) => {
    if (err) {
      return res.send(err);
    }
    if (!data[0]) {
      return res.send('邮箱不存在');
    }
    if (data[0].password != body.password) {
      return res.send('密码错误！');
    }
    res.redirect('/');
  });
}
exports.showSignin = showSignin;
exports.handleSingin = handleSingin;