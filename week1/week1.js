// 2
'use strict';

console.log('Hello World!');

//3
let myName = 'ellie';
console.log(myName);

//4
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        continue;
    } 
    console.log('qi. ${i}');
}

for (let i = 1; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log('q2. ${i}');
}

//5
const add = (a, b) => { 
    //more stuff
    return a + b;
}

function calculate(command, a, b) {
    //add, subtract, divide, multiply, remainder

    switch(command) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'divide':
            return a/b;
            break;
        case 'multiply':
            return a*b;
            break;
        case 'remainder':
            return a % b;
        default:
            return 'invalid command';

    }

}