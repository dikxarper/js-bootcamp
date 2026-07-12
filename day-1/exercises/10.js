console.log(a); // undefined
var a = 10;

console.log(b); // error
let b = 20;

console.log(c); // error
const c = 30;

sayHello(); // Hello

function sayHello() {
    console.log("Hello");
}

sayBye(); // error

const sayBye = function() {
    console.log("Bye");
}