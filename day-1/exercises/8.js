const initialUserId = Symbol("idNumber");
const userId = Symbol("idNumber");

console.log(initialUserId == userId); // false

const user = {
    id: Symbol("idNumber")
}

const hash = Symbol("wtf is going on");
console.log(JSON.stringify(hash));

console.log(Symbol("id") !== Symbol("id")); // false. symbol creates unique variable, even though their values are same

// i couldn't do third task
