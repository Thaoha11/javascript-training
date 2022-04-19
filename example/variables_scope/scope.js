// Different between var,let,const
// 1. var/let,const : scope,hoisting
// 2.const/var,let : assignment

// code block :if else,loop,{}

// scope
{
    let course = 'javascript'
    {
        console.log(course)
    }
}

// hoisting
var a; a = 1
console.log(a)

// assignment

/* error
const b=1;
b=100; 
console.log(b) */

const b = { name: 'Thao' }
b.name = 'Ha'
console.log(b.name)


