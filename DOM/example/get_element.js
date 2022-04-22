// id
var headingNode = document.getElementById('heading')
console.log(headingNode)

// class
// var headingNodes = document.getElementsByClassName('heading-1')
// console.log(headingNodes)

// tagName
var headingNodes = document.getElementsByTagName('p')[1]
console.log(headingNodes)

// CSS selector
// var headingNodes = document.querySelector('.heading-1')
// var headingNodes = document.querySelector('.box .heading-1:nth-child(2)')
// var headingNodes = document.querySelectorAll('.box .heading-1')
// console.log(headingNodes[1])

var boxNode = document.querySelector('.box')
console.log(boxNode)
console.log(boxNode.querySelector('p'))

// HTML collection
// console.log(document.forms)
// console.log(document.forms.test)
// console.log(document.anchors)

document.getElementById('heading').style.color = 'red'