// multiply every num and get doubled
const numbers = [12, 10, 8, 15, 7];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// added every num and get + 5
const numbers2 = [12, 10, 8, 15, 7];
const fiveBonus = numbers2.map((num) => num + 5);
console.log(fiveBonus);

// half every num and get half
const numbers3 = [12, 10, 8, 15, 7];
const half = numbers3.map((num) => num / 2);
console.log(half);

// Array operation: finding length and First letter
const friends = ["Tom", "John", "Micheal", "Oliver"];
const lengths = friends.map((frnd) => frnd.length);
console.log(lengths);
const firstLetter = friends.map((friend) => friend[0]);
console.log(firstLetter);



// Quiz question
const friend = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const firstFriends = friend.filter((friend) => friend.length == 5);
console.log(firstFriends);

const product = {
  name: "Laptop",
  model: "Yoga 3",
  price: 49000,
  dusk: "512SSD",
};

console.log(product.price);