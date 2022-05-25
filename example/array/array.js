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

// fill
console.log(array1.fill(0, 2, 4))
console.log(array1.fill(9, 1))
console.log(array1.fill(4))

//findIndex
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 9;
console.log(array2.findIndex(isLargeNumber));

//entry
const array3 = ['a', 'b', 'c']
const iterator = array3.entries();
console.log(iterator.next().value)
console.log(iterator.next().value)

//every
const isBelowThreshold = (currentValue) => currentValue < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every(isBelowThreshold));

//toString
console.log(array3.toString())

//sort
console.log(array4.sort())

//key
const iterator1 = array3.keys();
for (const key of iterator1) {
    console.log(key);
}

// reduce
const array5 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array5.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumWithInitial);

//reduceRight
const array6 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array6);


