/* 
    const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

    const fLengths = friends.map(friend => friend.length);
    // console.log(fLengths);
    const numbers = [5, 7, 10, 12, 15, 20, 25, 55, 75, 99];
    const bigNumber = numbers.map(number=> number>20);
    console.log(bigNumber);

 */
// filter explain same as map
const products = [
    {id: 1, name: 'tshirt', price: 250},
    {id: 2, name: 'mobile', price: 5000},
    {id: 3, name: 'case', price: 5000},
    {id: 3, name: 'laptop', price: 42000},
    {id: 3, name: 'desktop', price: 32000}
];

const expensive = products.filter(product => product.name == 'case' );
const mapCondition = products.find(product => product.price == 5000 );
console.log(mapCondition);