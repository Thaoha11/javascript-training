Array.prototype.reduce1 = function (callback, InitialValue) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var previousValue = callback(InitialValue, this[i], i);
        InitialValue = previousValue;
    }
    return previousValue;
}

var NumberArray = [1, 1, 3]
function sumHandler(previousValue, currentValue, currentIndex) {
    return previousValue + currentValue;
}
let Sum = NumberArray.reduce1(sumHandler, 0);

console.log(Sum);