const u = require('../models/user.model');

exports.index = (req, res) => {
	res.send(u);
};

exports.test = (req, res) => {
	res.send('test');
};

//module.exports = index;