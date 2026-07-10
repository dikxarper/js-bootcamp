// https://javascript.info/variables#name-things-right

// 1. Working with variables
let admin, name;

name = "John";
admin = name;

console.log(admin);

// 2. Giving the right name
let planetName = "Earth"; //ourPlanetName
let currentUser = "Adam"; // currentUserName

// 3. Uppercase const?
const birthday = "18.04.1982";
const age = someCode(birthday);

/*  - Would it be right to use uppercase for birthday and age ?
    - No, the variables are generic */

/*  - Birthday can be named in uppercase, cause we know the 
    value beforehand, age does change, but not trought the 
    code execution */
