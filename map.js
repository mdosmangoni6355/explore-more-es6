// map ==> loop through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in array and finally returns you the array

const numbers = [4, 5, 2, 8, 10];

function doubleIt(num){
    console.log(num);
    return num * 2;
}

const double2 = n => n * 2;

// const result = numbers.map(doubleIt);
const result = numbers.map(double2);
// console.log(result)
const result2 = numbers.map(n => n * 2);

// method 1
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);