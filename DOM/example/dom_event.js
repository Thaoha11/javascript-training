// Assign event using the element node

// let h1Element = document.querySelectorAll('h1')

// for (let i = 0; i < h1Element.length; ++i) {
//     h1Element[i].onclick = function (e) {
//         // console.log(e)
//         console.log(e.target)
//     }
// }


// 1. Input 

let inputElement1 = document.querySelector('input[type="text"]')

inputElement1.oninput = function (e) {
    inputElement1 = e.target.value;
    // console.log(inputElement)
}

let inputElement2 = document.querySelector('input[type="checkbox"]')

inputElement2.onchange = function (e) {
    e.target.checked;
    console.log(e.target.checked)
}

// 3. select
let inputElement3 = document.querySelector('select')

inputElement3.onchange = function (e) {
    console.log(e.target.value)
}
