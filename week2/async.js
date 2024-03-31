// async await
// style help for promise chaining (syntatic sugar)

// async
async function fetchUser() {
    return 'jiyoon';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1500);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana(); // 병렬 처리

    const apple = await applePromise();
    const banana = await bananaPromise();
    return '${apple} + ${banana}';
}

pickFruits().then(console.log);

// promise api
// all
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// race
function pickOneFruit() {
    return Promise.race([getApple(), getBanana()]);
}

pickOneFruit().then(console.log);