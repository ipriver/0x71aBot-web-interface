const Account = require('../models/account.model');

describe('#account', () => {
	it('account creation', () => {
		let acc = new Account('superlogin', 'superpass');
		expect(acc.login).toEqual('superlogin');
	})
});