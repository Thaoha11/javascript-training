// function myFunction(param) {
//     param('Hello World')
// }

// function myCallback(value) {
//     console.log('value:', value)
// }
// myFunction(myCallback)

Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        output.push(result)
    }
    return output;

}

var course = [
    'javascript',
    'PHP',
    'Ruby'
]

var htmls = course.map2(function (course) {
    return `<h2>${course}</h2>`

})

console.log(htmls.join())
