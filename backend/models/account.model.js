const bcrypt = require('bcrypt');

const saltRounds = 10;

class Account {
	constructor(login, pass) {
		this.login = login;
		this.password = pass;
		hashPassword()

		let timeNow = new Date();
		this.regDate = timeNow;
		this.lastVisited = timeNow;
	}

	hashPassword() {
		bcrypt.hash(this.password, saltRounds).then((hash) => {
    		this.hashedPass = hash;
		});
	}

	checkPassHash() {
		bcrypt.compare(this.password, this.hashedPass).then((result) => {
			console.log(result)
		});
	}
}

module.exports = Account;