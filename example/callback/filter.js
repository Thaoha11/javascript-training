Array.prototype.filter2 = function (callback) {
    var output = [], arrayLength = this.length;
    for (i = 0; i < arrayLength; i++) {
        // Check if a property exists in Object or not
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i)
            if (result) {
                output.push(this[i])
            }
        }
    }
    return output;
}

var myInfo = [
    {
        name: 'Thao',
        age: '22'
    },
    {
        name: 'Don',
        age: '31'
    },
    {
        name: 'Hun',
        age: '29'
    },
]

var filterMyInfo = myInfo.filter2(function (myInfo) {
    // console.log(myInfo)
    return myInfo.name == 'Thao';
});
console.log(filterMyInfo);  