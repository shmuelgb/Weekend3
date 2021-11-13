function summation(int) {
    let i = 1;
    let sum = 0;
    while (i <= int) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(summation(8));