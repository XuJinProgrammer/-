const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'newssql'
})
const checkEmail = function (email,cb) {
  const sqlstr = 'SELECT * FROM `users` WHERE email=?';
  connection.query(sqlstr, email, (err, data) => {
    if (err) {
      return cb(err,null);
    };
      cb(null,data);
  });
};
exports.checkEmail = checkEmail;