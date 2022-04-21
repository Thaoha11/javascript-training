
Array.prototype.reduce1 = function (callback, InitialValue) {
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; ++i) {
        var previousValue = callback(InitialValue, this[i], i);
        InitialValue = previousValue;

    }

    return previousValue;

}
var NumberArray = [1, 2, 10]
function sumHandler(previousValue, currentValue) {
    // console.log(previousValue)
    return previousValue + currentValue;

}
let Sum = NumberArray.reduce1(sumHandler, 0);

console.log(Sum);


