// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];

const selected = players.filter((p) => p > 70);
console.log(selected);

const selected2 = players.filter((p) => p > 80);
console.log(selected2);

const selected3 = players.filter((p) => p > 50);
console.log(selected3);

// even number
const selected4 = players.filter((p) => p % 2 === 0);
console.log(selected4);

// odd number
const selected5 = players.filter((p) => p % 2 !== 0);
console.log(selected5);

const friends = ["Tom", "John", "Micheal", "Oliver", "Tim", "Joshna"];
const oddFriends = friends.filter((friend) => friend.length > 4);
console.log(oddFriends);
