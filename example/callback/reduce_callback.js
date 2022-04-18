Array.prototype.reduce1 = function (callback) {
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {

        var previousValue = callback(this[i], i);
        // console.log(previousValue)
        // InitialValue = previousValue;
    }
    return previousValue;
}

var NumberArray = [1, 1, 9]
function sumHandler(previousValue, currentValue) {
    return previousValue + currentValue;
}
let Sum = NumberArray.reduce1(sumHandler, 0);

console.log(Sum);