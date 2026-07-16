# Data Types

There are eight data types in JavaScript: seven primitive types and objects.

## Primitive

- `Number` represents integer and floating-point numbers. Its special values include:

 - `Infinity`. One way to get it is to divide a positive number by zero.
 - `-Infinity`. One way to get it is to divide a negative number by zero.
 - `NaN`. It represents an invalid numeric result. Interestingly, `typeof NaN === "number"`.

- `BigInt` represents integers of arbitrary size. The safe integer range for `Number` is from `-(2 ** 53 - 1)` to `2 ** 53 - 1`. Add `n` to an integer literal to create a `BigInt`, for example `123n`. Mixing `BigInt` and `Number` in arithmetic operations causes a `TypeError`.
- `String` represents text. Strings can be created with single quotes, double quotes, or backticks. Template literals allow expressions such as `${expression}`.
- `Boolean` has two possible values: `true` and `false`.
- `null` represents an intentional absence of a value. `typeof null` returns `"object"` because of a historical JavaScript bug, but `null` is a primitive value.
- `undefined` usually means that a value has not been assigned.
- `Symbol` represents a unique primitive value, often used as an object property key. Symbol-keyed properties are ignored by `for...in`, `Object.keys()`, and `JSON.stringify()`.

## Non-primitive

- `Object` represents collections of data and more complex entities. Arrays and functions are also objects, although `typeof` returns `"function"` for functions.
