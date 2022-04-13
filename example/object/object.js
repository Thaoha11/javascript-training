var emailKey = 'email'
var myInfo = {
    name: 'Thao',
    age: 22,
    gender: 'female',
    [emailKey]: 'thaoha@gmail.com',
    // method
    getName: function () {
        return this.name
    }
}
// myInfo.email = 'thaoha@gmail.com'
// myInfo['my-email'] = 'thaoha@gmail.com'
console.log(myInfo.getName());
console.log(myInfo)