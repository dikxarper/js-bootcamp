/* 
    1. Variable is declared, but not assigned. // undefined
    2. User intentionally deleted profile picture. // null
    3. Function did not return anything. // undefined
    4. Server informs that user do not have second name. // null
    5. User cancelled `prompt()`. // null
*/

console.log(null == undefined); // true
console.log(null === undefined); // false, object != undefined