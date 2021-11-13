function shortestWord (str) {
    strArr = str.split(' ');
    let shortest = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i].length < shortest.length){
            shortest = strArr[i];
        }   
    }
    return shortest.length;
}
console.log(shortestWord('firkjnkjbkjbkjd dsrgjagon'));