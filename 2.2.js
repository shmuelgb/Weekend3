function binary (array) {
    array = array.join('');
    return parseInt(array, 2)
}
let arr1 = [1, 1, 0, 0, 1];
console.log(binary(arr1));