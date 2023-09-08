
let users = [];
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    #encrypt(password) {
        return 'encrypted-version-of-' + password;
    }

    #decrypt(encryptedPassword) {
        return encryptedPassword.split('encrypted-version-of-')[1];
    }

    register(email, password) {
        let v = users.filter(v => {
            return v.email == email;
        });

        if (v.length) {
            console.log('Error: email sudah dipakai');
            return;
        }

        let user = {
            email: email,
            password: this.#encrypt(password)
        };
        users.push(user);
        this.email = user.email;
        this.password = user.password;
        return;
    }

    login(email, password) {
        let v = users.filter(v => {
            return v.email == email;
        });

        if (!v.length) {
            console.log('Error: email tidak ditemukan');
            return;
        }

        let user = v[0];
        if (password != this.#decrypt(user.password)) {
            console.log('Error: password salah');
            return;
        }

        this.email = user.email;
        this.password = user.password;
    };
}


let user1 = new User();
user1.register('joko@mail.com', 'password123');
console.log(user1);

let user2 = new User();
user2.register('joko@mail.com', 'password123');
console.log(user2);

let login1 = new User();
login1.login('joko@mail.com', 'password1234');
console.log(login1);