function initals (str){
    let newStr = str[0] + '.';
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i-1) === ' '){
            newStr += str.charAt(i);
        }
    }
    return newStr;
}
console.log(initals('Sam Harris'));