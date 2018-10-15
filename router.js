const express = require('express');
const con_user=require('./controllers/con_user');
const router = express.Router();
router.get('/signin', con_user.showSignin);
router.post('/signin',con_user.handleSingin);
module.exports = router;