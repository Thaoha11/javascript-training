let boxElement = document.querySelector('.box')

// console.log(boxElement.classList.value)

// add class
boxElement.classList.add('red')

// check Class exists or not
console.log(boxElement.classList.contains('red'))

// remove Class
boxElement.classList.remove('red')

// toggle
setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000);
