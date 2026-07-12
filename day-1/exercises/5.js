const bigNumber1 = 522931n;
const bigNumber2 = 213231n;
console.log(bigNumber1 + bigNumber2); // 736162n

console.log(10n / 3n); // 3n, because bigint works only with whole integers

console.log(10n + 5); // cannot mix
console.log(10n + 5n); // 15n
console.log(10 + 5); // 15

console.log(10n == 10); // true
console.log(10n === 10); // false

