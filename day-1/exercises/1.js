const firstName = "Dias";
const lastName = "Merekeyev";
const age = 22;
const isStudent = false;

console.log(`My full name is ${firstName} ${lastName}. I am ${age} and I am${isStudent == true ? "" : " not"} a student`);

let airline = "Air Astana";
console.log(airline);
airline = "Air Bus";
console.log(airline);

const brand = "LG";
console.log(brand);
brand = "Samsung"; // error "Assignment to constant variable"

const user = {
    "name": "Aibek",
    "age": "20"
}

user.name = "Asyl";
user.age = 38;

const newUser = {
    "name" : "Maksat",
    "age": 10
}

user = newUser; // error "Assignment to constant variable"