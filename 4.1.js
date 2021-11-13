function fibonacci (n) {
    let first = 0;
    let second = 1;
    let third = 0;
    console.log(1,',');
    let i = 1;
    while (i < n){
        third = first + second;
        console.log(third, ',');
        first = second;
        second = third;
        i++;
    }
}
fibonacci(14);