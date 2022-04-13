var myName = 'ha y thao'
//length
console.log(myName.length)

//convert to lower case & upper case
console.log(myName.toLocaleLowerCase())
console.log(myName.toLocaleUpperCase())

//slice
console.log(myName.slice(2, 4))

// indexOf
const myString = 'javascript training '
console.log(myString.indexOf('ing'))

//replace
var marvel = 'Captain American Captain American';
console.log(myString.replace('javascript', 'HTML'));
console.log(marvel.replace(/American/g, 'marvel'));

// template string es6
var firstName = 'Chris'
var lastName = 'Evan'
console.log(`Full name :${firstName} ${lastName}`)