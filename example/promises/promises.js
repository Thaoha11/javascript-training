// 1. Pendding
// 2.Fulfilled
// 3.Reject

// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // logic
//         // Sucess :resolve
//         //failure : reject
//         resolve()
//     }
// )

// promise
//     .then(function () {
//         console.log("Successully!");
//     })
//     .catch(function () {
//         console.log("Failure!");
//     })
//     .finally(function () {
//         console.log("Done!");
//     })

// Promise chain
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
        return sleep(1000);
    })
    .then(function () {
        console.log(3);
        return sleep(1000);
    })
    .then(function () {
        console.log(4);
        return sleep(1000);
    })
