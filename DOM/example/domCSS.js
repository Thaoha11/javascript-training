let boxElement = document.querySelector('.box')

// boxElemnt.style.color = 'red'
// boxElemnt.style.width = '200px'
// boxElemnt.style.height = '100px'

Object.assign(boxElement.style, {
    width: "200px",
    height: "100px",
    background: "blue",
});

console.log(boxElement.style.width)
