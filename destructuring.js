const fish = { id: 58, name: 'King Hilsha', price: 5000, phone: '0155555', address: 'Barishal', dress: 'sonali'};

/* 
const phone = fish.phone;
const id = fish.id;
const name = fish.name; 
*/
/* 
const {id, phone, name, price, address, dress} = fish;

console.log(phone, id);
console.log(phone, price);
console.log(phone, dress);
console.log(phone, name);
console.log(phone, address);
 */

const company = {
    name: 'gp',
    ceo: {id: 1, name: 'jamal', food: 'fuska', },
    web: { work: 'website development', employee: 22, framework: 'React'}
}

const {name, food} = company.ceo;
const { work, framework} = company.web;
// console.log( 'company use kore ' + framework);





