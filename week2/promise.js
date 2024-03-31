'use strict';

// state (pending -> fulfilled or rejected)
// producer vs consumer

// producer
const promise = new Promise((resolve, reject) => {
    //executer runs immediately on new Promise
    console.log('doing something heavy...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// consumer
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// promise training
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => XPathResult(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// error handling
// .catch() 