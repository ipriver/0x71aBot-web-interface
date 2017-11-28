const express = require('express');
const router = express.Router();

const account = require('../controllers/account.controller');

router.get('/login', account.login);

router.get('/register', account.register);

module.exports = router;