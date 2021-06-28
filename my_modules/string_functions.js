function toCamelCase(string) {
    string = string.toLowerCase();
    let newString = "";
    const badChar = '!@#$%^&*()-_=+[]{}:;"\\|<,>.?/~`';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = newString + string[i + 1].toUpperCase();
            i++;
        } else if (badChar.indexOf(string[i]) === -1) {
            newString = newString + string[i];
        }
    }
    return newString;
}

export { toCamelCase };