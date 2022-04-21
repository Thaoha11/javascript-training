// DOM html
console.log(document)
document.write('Hello World')

// DOM attributes

let headingElement = document.querySelector('a');
// headingElement.title = 'heading'
headingElement.setAttribute('data', '1')

console.log(headingElement.getAttribute('data'))