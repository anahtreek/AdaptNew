'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {user} = require('./userEntity');
const userCtrl = require('./userController');
router.post('/login',userCtrl.login);

router.get('/logout', userCtrl.logout);

module.exports = router;
