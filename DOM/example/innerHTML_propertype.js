// innerHTML 

// var boxElemnt = document.querySelector('.box')
// boxElemnt.innerHTML = '<h1 title="heading">Heading</h1>'

// console.log(boxElemnt.innerHTML)
// console.log(boxElemnt.querySelector('h1').innerText = 'New Heading')

// outerHTML :overwrite
var boxElemnt = document.querySelector('.box')

boxElemnt.outerHTML = '<span>Test</span>'

console.log(boxElemnt.innerHTML)//no longer exists in the DOM

