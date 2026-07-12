# Variables

Variable is a named storage for data. We can declare it with `let`. Use single line declaration and assignment. Multiline declaration might create a mess.

`let` allows you to change its value during the code execution:

```js
let wtf = "What the fuck?"
wtf = "What the fock?"
console.log(wtf); // What the fock?
```

Variable names are case-sensitive in JavaScript. They may contain letters, digits, underscores (`_`), and dollar signs (`$`), but they cannot begin with a digit.

A variable declared with `let` can be reassigned and has block scope.
A variable declared with `const` cannot be reassigned. However, the contents of an object or array assigned to it can be modified.

**Hoisting** (поднятие) means that declarations are processed before the code is executed, even if they appear later in the source code. A variable declared with `var` is initialized with `undefined`. It has function scope, not block scope.

JavaScript is a dynamically typed and weakly typed language. You do not need to specify the data type when creating the variable.
