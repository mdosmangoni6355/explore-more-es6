const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(x => x * 2);
// console.log(doubled);
const sumFive = numbers.map(y => y + 5);
// console.log(sumFive);
const half = numbers.map(z => z / 2);
// console.log(half);

const friends = ['Tom', 'John', 'Micheal', 'oliver'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);