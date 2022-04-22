// InnerText is what we see on the screen
// textContent is what is original in textNode

var headingElement = document.querySelector('.heading')

console.log(headingElement.innerText)

console.log(headingElement.textContent)

// headingElement.innerText = `

//     New Heading 

// `
headingElement.textContent = `

    New Heading 

`

