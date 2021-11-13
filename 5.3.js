

function toCamelCase2 (str) {
    if (str.indexOf('-'))
        strArr = str.split('-');
    if (str.indexOf('_'))
        strArr = str.split('_');
    for (let i = 1; i < strArr.length; i++) {
        let letter = strArr[i][0];
        strArr[i] = strArr[i].replace(letter, letter.toUpperCase());
    }
    return strArr.join('');
}

console.log(toCamelCase2("the_stealth_warrior"));
// console.log(toCamelCase2("the-stealth-warrior"));