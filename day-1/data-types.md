# Data Types

There are 8 data types:
    (Primitive)
    - Number. Integer and floating point numbers. It has 3 special number values:
        - Number.POSITIVE_INFINITY (Infinity). One of the way to get it - divide the number by zero.
        - Number.NEGATIVE_INFINITY (-Infinity).
        - Number.NaN (NaN). It is undefined or error value after math operations. Every math operation with NaN will give NaN (except NaN**0 = 1).
    - BigInt. Number can store numbers up to +- 2**53, there will be precision errors outside of this range. BigInt is used for that out-range. Use `n` at the end to define BigInt.
    - String. Set of characters. It is defined with quotes (single, double, backticks). You can embed expression or variable inside backticks with `$` character.
    - Boolean. It stores *true* or *false*.
    - Null. It means nothing, unknown. The type of null is *object*.
    - Undefined. It means there is no value. The variable was declared, but not assigned. Don't give it initially, use null.
    - Symbol. These are unique strings. If you need unique variable. It is ignored in for ... in loops, Object.keys, JSON.stringify.
    (Non-primitive)
    - Object. Complex data.
