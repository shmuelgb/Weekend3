function bus (array) {
    let current = 0;
    for (let i = 0; i < array.length; i++) {
        current += array[i][0]
        current -= array[i][1]
    }
    return current;
}

let busRide =[[9,2], [2,4], [5,2]]
console.log(bus(busRide));