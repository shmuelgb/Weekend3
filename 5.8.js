function longestWord (str) {
    strArr = str.split(' ');
    let longest = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i].length > longest.length){
            longest = strArr[i];
        }   
    }
    return longest;
}
console.log(longestWord('firkjnkjbkjbkjd drgjagon'));