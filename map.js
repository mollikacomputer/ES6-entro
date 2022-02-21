
const numbers = [4,6,8,10];

const output = []
/* 
function doubleIt(number){
    const result = number * 2;
    return result;
}
 */
function tripleIt(number){
    const result = number * 3;
    return result;
}
// const tripleIt = num => num * 5;

for(const number of numbers){
    const result = tripleIt(number);
    output.push(result);
}
// console.log(output);


const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {product.price} = price;

// console.log(price);

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

player.map(player= player.name.firstName);