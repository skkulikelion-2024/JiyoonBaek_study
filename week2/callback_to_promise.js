class UserStorage {
    loginUser(id, password) {

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (
                    (id === 'jiyoon' && password === 'hello') ||
                    (id === 'ellie' && password === 'goodbye')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (user === 'jiyoon') {
                    resolve({name:'jiyoon', role:'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
        
    }
}

const userStorage = new UserStorage();
const id = prompt('enter id:');
const password = prompt('enter password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => {
    alert('hello ${userWithRole.name}, you have a ${userWithRole.role} role');})
.catch(console.log);