'use strict'

// js = synchronous (동기적)
// hoisting 이후 순서대로 실행
// async = 비동기적 (언제 실행될지 알 수 없다)
// callback 함수 (ex. setTimeout??)
// 주로 => 이용

// sync callback
function printImm(print) {
    print();
}
printImm((()=> console.log('hello')));


// async callback
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}
printDelay(()=> console.log('async callback'), 2000);

// callback
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'jiyoon' && password === 'hello') ||
                (id === 'ellie' && password === 'goodbye')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'jiyoon') {
                onSuccess({name:'jiyoon', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter id:');
const password = prompt('enter password');
userStorage.loginUser(
    id, 
    password, 
    user=> {
        UserStorage.getRoles(
            user, 
            (userWithRole) =>{
                alert('hello ${userWithRole.name}, you have a ${userWithRole.role} role');
            },
            error => {
                console.log(error);
            }
        );
    }, 
    error=> {console.log(error);
    }
);