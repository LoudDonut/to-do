function toCamelCase(string) {
    string = string.toLowerCase();
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = newString + string[i + 1].toUpperCase();
            i++;
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
}

export { toCamelCase };