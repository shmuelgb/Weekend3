function math (op, a, b) {
    switch (op){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
        break;
        case '*':
            return a*b;
        break;
        case '/':
            return a/b;
        break;
    }
}
console.log(math('/', 49, 7));

