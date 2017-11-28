class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    save() {
        console.log('saved in DB');
    }
}

let u = new User('max', 24);
module.exports = u;