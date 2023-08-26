// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

// normal map using
const numbers = [4, 5, 2, 8, 10];
function doubleIt(num) {
    // get each single number
    console.log('num now', num)
    return num * 2;
}
// get result for doubled numbers with in array
const result = numbers.map(doubleIt)
console.log(result);