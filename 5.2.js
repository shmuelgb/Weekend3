function repeatStr(n, str){
    let retStr = ``;
    for (let i = 0; i <= n; i++) {
        retStr += `${str}`;
    }
    return retStr;
}
console.log(repeatStr(6,'Hello'));