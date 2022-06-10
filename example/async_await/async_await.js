//  Async Syntax

async function myFunction() {
    return 'hello';

}

myFunction()
    .then(function (result) {
        console.log("result: ", result);
    })
    .catch(function (err) {
        console.log("Error: ", err);
    });

// Await Syntax

async function myDisplayer() {
    let promise = new Promise(function (resolve) {
        resolve("Success!");
    });
    console.log(await promise);
}

myDisplayer();

// Time out
async function myDisplay() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () { resolve("Hello World"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

// fectch API

// const getNewTodo = async (id) => {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     let data = await res.json();
//     return data;
// }

// getNewTodo(3).then(data => {
//     console.log('data:', data)
// })