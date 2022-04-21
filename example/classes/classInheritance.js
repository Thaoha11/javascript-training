class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    intro() {
        console.log(this.name + this.age)
    }
}
class Student extends Person {

    constructor(name, age, id, gender) {
        super(name, age)
        this.id = id
        this.gender = gender
    }

}

var st = new Student('Thao', 22, 1, 'female');
st.intro();
console.log(st)