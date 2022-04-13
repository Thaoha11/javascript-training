function User(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function () {
        return `${this.firsName} ${this.lastName}`
    }
}

User.prototype.className = 'Javascript'
User.prototype.getClassName = function () {
    return this.className
}

var user1 = new User('Thao', 'Ha', 22)
var user2 = new User('Nguyen', 'Anh', 11)

console.log(user1.getClassName())
console.log(user2)