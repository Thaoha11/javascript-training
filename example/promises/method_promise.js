// Promise.resolve

// var promise = Promise.reject("Error!");

// promise
//     .then(function (result) {
//         console.log("result: ", result);
//     })
//     .catch(function (error) {
//         console.log('error: ', error);
//     });

// Promise.reject
// var promise = Promise.reject("Error!");

// promise
//     .then(function (result) {
//         console.log("result: ", result);
//     })
//     .catch(function (error) {
//         console.log('error: ', error);
//     });

// Promise.all

var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve([1]);
    }, 1000);
});

var promise2 = Promise.reject("error!");

Promise.all([promise1, promise2])
    .then(function ([result1, result2]) {
        console.log(result1.concat(result2));
    })
    .catch(function (error) {
        console.log("error: ", error);
    });

