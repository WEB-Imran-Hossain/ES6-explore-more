// Access Value chain system for es6
const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
// second product price
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'Imran Hosain',
    address: {
        street: {
            first: '22/A Dhanmondi',
            second: '18/A Kolabagan',
            third: '16/C Mohammadpur'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    id: 5002,
    name: 'Nur e Islam',
    address: {
        city: 'Shylet',
        country: 'Bangladesh'
    }
}
// 1st user
console.log(user.address.street.second);
// 2nd user
console.log(user2.address.country);


// nested object find
const user3 = {
    id: 5001,
    name: 'Imran Hosain',
    address: {
        street: {
            first: '22/A Dhanmondi',
            second: '18/A Kolabagan',
            third: '16/C Mohammadpur'
        },
        city: 'Dhaka'
    }
}

console.log(user3.address.street.third);


// optional chaining find
const user4 = {
    id: 5001,
    name: 'Imran Hosain',
    address: {
        street: {
            first: '22/A Dhanmondi',
            second: '18/A Kolabagan',
            third: '16/C Mohammadpur'
        },
        city: 'Dhaka'
    }
}

const user5 = {
    id: 5002,
    name: 'Nur e Islam',
    address: {
        city: 'Shylet',
        country: 'Bangladesh'
    }
}

console.log(user4.address.street?.first);
console.log(user5.address.street?.city);