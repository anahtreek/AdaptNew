'use strict';
const router = require('express').Router();
const users = require('../users/userEntity');
const userCtrl = require('./dndController');
router.put('/updateStatus',userCtrl.updateStatus);

module.exports = router;
