// Get Infinity in 3 ways
const posInf1 = 1 / 0;
const posInf2 = Infinity / 1;

console.log(posInf1, posInf2);

// Get -Infinity
const negInf = -1 / 0;
console.log(negInf);

// NaN in 5 ways
console.log(1 * "string");
console.log(1 / "string");
console.log(1 - "string");

console.log(Number.MAX_SAFE_INTEGER); // max number - 1
console.log(Number.MAX_SAFE_INTEGER + 1); // max number
console.log(Number.MAX_SAFE_INTEGER + 2); // exceeded max number
