const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// using map product name
const names = products.map((product) => product.name);
console.log(names);

// using map product price
const price = products.map((p) => p.price);
console.log(price);

// using foreach
const whatProduct = products.forEach((p) => console.log(p.id));
console.log(whatProduct);

// using filter
const expensive = products.filter((p) => p.price > 50000);
console.log(expensive);

// using find
const affordable = products.find((p) => p.price < 50000);
console.log(affordable);

// using reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);
