function PadLeft(value: string, padding: string | number) {
    if (typeof padding === "string") {
        return padding + value;
    }
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    throw new Error(`Expected string or number, got ${padding}.`);
}