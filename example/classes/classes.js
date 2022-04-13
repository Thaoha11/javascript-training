class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

const user1 = new Course('candy', 100)
const user2 = new Course('milk', 500)

console.log(user1.getName())
console.log(user2)