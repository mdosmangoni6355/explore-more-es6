const rolls = [2, 5, 6, 7, 8, 12];
const total = rolls.reduce((previous, current) => previous + current, 0)
console.log(total);

const sum = rolls.reduce((p, c) => p + c, 0);
console.log(sum);