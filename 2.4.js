function findUniq (array) {
    let uniq = array[0]
    for (let i = 1; i < array.length; i++) { 
        if (array[i] !== array[i+1] && array[i] !== array[i-1])
            uniq = array[i];
        }
        return uniq;
}
let testArr = [ 0, 0, 0, 8, 0, ];
console.log(findUniq(testArr));