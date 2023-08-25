// Data access
const data = [{id: 10, name: 'Osman', address: 'Balaram Hat'}];

// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'Walton Laptop', price: 79750},
        {id: 2, name: 'Macbook Air', price: 115000}
    ]
}
// Second product price
// console.log(products.data[1].price);


const user = {
    id: 601,
    name: 'Osman Goni',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'Lalbag kella',
            third: 'Kanchpur'
        },
        city: 'Dhaka'
    }
}
// Access street inside second
console.log(user.address.street?.second);

const user2 = {
    id: 1201,
    name: 'Atikuzzaman Atik',
    address: {
        city: 'Boda',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.city);