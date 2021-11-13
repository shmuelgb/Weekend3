function nbYear (p0, percent, inhabitants, populationDestn) {
    let years = 0;
    let populationCurrent = p0;
    while (populationCurrent < populationDestn){
        years ++;
        populationCurrent = populationCurrent + populationCurrent*(percent/100)+inhabitants;
    }
    return years;
}
console.log(nbYear(1500000, 2.5, 10000, 2000000));
