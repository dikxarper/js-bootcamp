function formatPrice(value) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
        return "Invalid price";
    }

    const formattedValue = numberValue.toFixed(2);
    return formattedValue;
}

formatPrice(12);        // "12.00"
formatPrice(12.3);      // "12.30"
formatPrice("12.345");  // "12.35"
formatPrice(0);         // "0.00"
formatPrice("hello");   // "Invalid price"
formatPrice(undefined); // "Invalid price"
