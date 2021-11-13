function sumLowest (array) {
    let lowest1 = array[0];
    let lowest2 = array[0];
    for (let i = 1; i < array.length; i++) {
        if(lowest1 > array[i]){
            lowest2 =lowest1;
            lowest1 = array[i];
        }
        if (lowest1 === lowest2) {
            lowest2 = array[1]
            for (let i = 1; i < array.length; i++){
                if (lowest2 > array[i])
                lowest2 = array[i];
            }
        }
    }
    return lowest1 + lowest2;
}
let testArr1 = [19, 5, 42, 2, 77];
let testArr2 = [10, 343445353, 3453445, 3453545353453];
console.log(sumLowest(testArr2));

function sumLowest2 (array) {
    array.sort(function(a, b) {
    return a - b;
});
    return array[0] + array[1];
}
console.log(sumLowest2(testArr2));
