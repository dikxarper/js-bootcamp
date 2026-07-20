function clamp(value, min, max) {
    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
}

console.log(clamp(5, 1, 10));    // 5
console.log(clamp(-3, 1, 10));   // 1
console.log(clamp(25, 1, 10));   // 10
console.log(clamp(1, 1, 10));    // 1
console.log(clamp(10, 1, 10));   // 10
console.log(clamp(7.5, 0, 5));   // 5
