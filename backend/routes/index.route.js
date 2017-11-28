const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/', user.index);
router.get('/test', user.test);

module.exports = router; 