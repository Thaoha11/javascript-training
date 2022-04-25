// Assign event using the element node

// let h1Element = document.querySelectorAll('h1')

// for (let i = 0; i < h1Element.length; ++i) {
//     h1Element[i].onclick = function (e) {
//         // console.log(e)
//         console.log(e.target)
//     }
// }


// 1. Input 

// let inputElement1 = document.querySelector('input[type="text"]')

// inputElement1.oninput = function (e) {
//     inputElement1 = e.target.value;
//     // console.log(inputElement)
// }

// let inputElement2 = document.querySelector('input[type="checkbox"]')

// inputElement2.onchange = function (e) {
//     e.target.checked;
//     console.log(e.target.checked)
// }

// 3. select
// let inputElement3 = document.querySelector('select')

// inputElement3.onchange = function (e) {
//     console.log(e.target.value)
// }

// 4. Key up/key down

// let inputElement4 = document.querySelector('input[type="text"]')

// inputElement4.onkeyup = function (e) {
//     console.log(e.which)
//     switch (e.which) {

//         case 27:
//             console.log('Exit')
//             break;
//         case 13:
//             console.log('Send')
//             break;
//     }

// }

// document.onkeypress = function (e) {
//     switch (e.which) {
//         case 13:
//             console.log('Send')
//             break;
//     }
// }

// 5.preventDefault

// let aElements = document.links;

// for (let i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function (e) {

//         if (!e.target.href.startsWith('https://www.facebook.com/')) {
//             e.preventDefault();
//         }
//     }
// }

// let ulElement = document.querySelector('ul')

// ulElement.onmousedown = function (e) {
//     e.preventDefault();

// }
// ulElement.onclick = function (e) {
//     console.log(e.target)
// }

// 6.stopPropagation :prevent bubble event

document.querySelector('div').onclick = function (e) {
    console.log('DIV')
}
document.querySelector('button').onclick = function (e) {
    e.stopPropagation()
    console.log('click')
}

