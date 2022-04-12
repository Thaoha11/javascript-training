// function showMessage() {
//     console.log('message');
// }

// showMessage();

// function showMessage(message, message2) {
//     if (message) {
//         console.log(message);
//     }
//     if (message2) {
//         console.log(message2);
//     }
// }
// showMessage("Test message", "Test message2")

// function showMessage() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param}  `
//     }
//     console.log(myString);
// }

// showMessage("Name :", "Thao");

//Expression function
var showMessage = function () {
    console.log('message')
}
showMessage();
// return in function
function sum(a, b) {
    return a + b;
}
var total = sum(2, 8);
console.log(total);

