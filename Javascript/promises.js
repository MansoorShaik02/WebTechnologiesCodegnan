const asyncpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            const a = Math.random()
            console.log(a)
            if (a > 0.5) {
                resolve('greater')

            }
            else {
                resolve('not greater')
            }
        }, 200);
    });
}
const apple = () => {
    return "1 + 2"
}
console.log(apple())

asyncpromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });



const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "a");
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "b");
});

Promise.all([myPromise1, myPromise2]).then((x) => {
    console.log(x)
});