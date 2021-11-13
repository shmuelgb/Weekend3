function findNextSquare (int) {
    function isPerfectSquare (int){
        return (Number.isInteger(Math.sqrt(int)));
    }
    if (isPerfectSquare(int)){
        int ++;
    while (!isPerfectSquare(int)){
        int ++;
        }
        return int;
    }
    return -1;
    
}

console.log(findNextSquare(120));