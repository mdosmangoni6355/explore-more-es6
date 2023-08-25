// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const rolls = [2, 5, 6, 7, 8, 12];
const players = [75, 64, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 60);

// for get odd numbers
const selected = players.filter(p => p % 2 === 1);
// console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'oliver', 'Mim', 'joshna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);