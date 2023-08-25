const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'HP', price: 40000},
    {id: 4, name: 'Macbook', price: 125000}
]

// map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(product => product.price);
// console.log(prices);

// forEach
// products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

// find
const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// reduce
const total = products.reduce((x, y) => x + y.price, 0);
console.log(total);