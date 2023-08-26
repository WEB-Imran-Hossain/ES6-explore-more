// using reduce: accumulator
const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current)=>previous + current, 0)
console.log(total);

// p= previous, c= current
const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum)