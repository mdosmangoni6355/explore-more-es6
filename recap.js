/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values, ES6 = Object.entries
 * 7. for of loop used in array and string,
 * 8. for in loop used in object
 */

const a = 50;
const numbers = [12, 43, 67, 57];
// const num = Math.min(...numbers);
const person = {
    name: 'Osman',
}

// const message = `Hi ${person.name} has a: ${a} access to ${num}`;
// console.log(message);

const square = x => x*x;
const sum = (a, b) => a + b;
const  sumOutput = sum(12, 13);
const result = square(10);
// console.log(result, sumOutput);

// destructuring
const {age, c, ...others} = {a: 5, b: 10, c: 12, name: 'Osman', age: 22};
// console.log(age, c, others)

const [first, second, ...third] = ['Osman', 'Atik', 'Khakon', 'Prodip', 'Rabbi', 'Robin']
// console.log(first, second, third);