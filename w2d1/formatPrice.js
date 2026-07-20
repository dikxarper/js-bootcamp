function formatPrice(value) {
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
        return "Invalid price";
    }

    const formattedValue = numberValue.toFixed(2);
    return formattedValue;
}
