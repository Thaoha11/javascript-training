var a = [
    'red',
    'blue',
    'white',
];

var b = [
    'black',
    'yellow',
];

var c = [
    'green',
    'orange',
    'olive',
    'pink'
]
//concat
console.log(a.concat(b));
console.log(b.concat(a));

//push
a.push('3', '4')
console.log(a)

//unshift
a.unshift(1, 2)
console.log(a)

//shift
console.log(b.shift())
console.log(b.shift())
console.log(b.shift())
console.log(b)

//pop
console.log(c.pop())
console.log(c)

//includes
console.log(c.includes('olive'))
console.log(c.includes('olive', 3))

//find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found)

// splice
c.splice(1, 1, 'baby blue')
console.log(c)

