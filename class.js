class Support{
    name;
    address = 'BD';
    role = 'Support Web Dev';
    // constructor another function write exactly same name constructor
    // difference name, address korte chaile constructor ar modde parameter hisabe dite hobe
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    // function
    startSession(){
        console.log(this.name + ' Start a support session');
    }
}
const razib = new Support('Razib Khan', 'BD');
const salman = new Support('Salman Chowdhury', 'Dubai');
// console.log(razib, salman);

razib.startSession();
salman.startSession();



/* 
class Support {
    name;
    role = "Support Web Dev";
    startSession(){
        console.log('Start a support session');
    }
}
const amir = new Support();
console.log(amir);

 */