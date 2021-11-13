function toWeirdCase (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (i % 2 === 0){
            str = str.replace(letter, letter.toUpperCase());
        }
        else{
            str = str.replace(letter, letter.toLowerCase());
        }
    }
    return str;
}
console.log(toWeirdCase('string'.toUpperCase()));