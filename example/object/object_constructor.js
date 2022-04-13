function User(firsName, lastName, age) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
    this.getName = function () {
        return `${this.firsName} ${this.lastName}`
    }
}
var author = new User('Thao', 'Ha', 22)
var user = new User('Nguyen', 'Anh', 11)

author.title = 'hello world'
user.comment = 'javastript training'

console.log(author.getName())
console.log(user)