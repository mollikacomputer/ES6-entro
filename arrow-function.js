function add(num1, num2){
    return num1 + num2;
}
// add(25,15);
// console.log(add(25,15));

// const add2 = function (num1, num2){
//     return num1+num2;
// }

// const sum1 = add2(12,15);
// const sum2 = add2(21,22);

// console.log(sum1, sum2);


const add4 = (num1, num2) => num1 + num2;

const sum3 = add4(100, 500);
console.log(sum3);

const number = [1,2,3,4,5];
number.unshift(25);
// console.log(number);

const numbers=[10,20,30,40,50,60,70]

console.log(Math.max(...numbers));
