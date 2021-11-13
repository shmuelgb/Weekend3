function tribonacci (array, lastN) {
    let first = array[0];
    let second = array[1];
    let third = array[2];
    let forth = 0;
    console.log(`${first},`);
    console.log(`${second},`);
    console.log(`${third},`);
    let i = 3;
    while (i < lastN){
        forth = first + second + third;
        console.log(forth, ',');
        first = second;
        second = third;
        third = forth;
        i++;
    }
}
tribonacci([0, 0, 1], 10);