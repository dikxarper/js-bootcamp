# Variables

Variable is a store for data. We can declare it with `let`. Use single line declaration and assignment. Multiline declaration might create a mess.

`let` allows to change the value trough the code execution:

```js
    let wtf = "What the fuck?"
    wtf = "What the fock?"
    console.log(wtf); // What the fock?
```

Variable names are case sensitive in JS. Characters are banned, but you can use $ and _ for naming.

`let` value can be changed.
`const` value can't be changed.

**Hoisting** (поднятие) moves up the variable in code execution, even though it is not declared at the top. `var` is an example, cause we are able to get variable at any line of multiline code execution. It is old school practise, it creates confusing case when the function can get the variable value before the declaration. Also, `var` can redeclare the same variable. Do not use `var` unless you are working with archaic browser.

JS is dynamic typed / weak language. You do not need to specify the data type when creating the variable.
