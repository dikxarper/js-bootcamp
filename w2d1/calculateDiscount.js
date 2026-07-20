function calculateDiscount(price, discountPercent) {
    const numericPrice = Number(price);
    const numericDiscountPercent = Number(discountPercent);

    if (
        Number.isNaN(numericPrice) ||
        Number.isNaN(numericDiscountPercent)
    ) {
        return "Invalid input";
    }

    const discountPrice = numericPrice * (numericDiscountPercent / 100);
    const priceAfterDiscount = Math.round(numericPrice - discountPrice);
    return priceAfterDiscount;
}

console.log(calculateDiscount(1000, 20));       // 800
console.log(calculateDiscount("500", "10"));    // 450
console.log(calculateDiscount(999, 15));        // 849
console.log(calculateDiscount(100, 0));         // 100
console.log(calculateDiscount("hello", 10));    // "Invalid input"
console.log(calculateDiscount(100, "abc"));     // "Invalid input"
