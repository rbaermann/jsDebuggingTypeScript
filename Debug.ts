//NUMBER 1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;

var mystring: any; //now it can be set to anything, not just restricted to strings
mystring = "Bee stringer";
mystring = 9;


//NUMBER 2
function sayHello(name: string){
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));

function sayhello(name: any) {
    return `Hello, ${name}!`;
}

console.log(sayhello("Kermit"));
console.log(sayhello(9)); // same answer, if you want it to return a string, and a number, you have to set the type to any


//NUMBER 3
function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

function fullname(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

console.log(fullname("Mary", "Moore", "Tyler"));
console.log(fullname("Jimbo", "Jones")); //In order to make the middle name optional, you have to put a ? before the colon when declaring it


//NUMBER 4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function Graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const Christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const Jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //the properties names have to match
}
console.log(graduate(Christine));
console.log(graduate(Jay));



//NUMBER 5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
    }
    debug(){
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = Ninja();
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
fullName: "Alan Turing",
firstName: "Alan",
lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

class Ninja2 {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
    debug(){
        console.log("Console.log() is my friend.")
    }
}
const Shane = new Ninja2("Alan", "Turing"); //Creating a new instance, with the values passed in;
const Turing = {
    firstName: "Alan",
    lastName: "Turing",
    fullName: `${this.firstName} ${this.lastName}`
}
function Study(programmer: Ninja){
return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(Study(Shane)); //Passing an instance of a Ninja



//NUMBER 6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];

var Increment = (x : number) => x + 1;
console.log(Increment(3));
var Square = (x : number) => {x * x}; //x needed to be declared
console.log(Square(4));
var Multiply = (x : number, y : number) => x * y; //an anonymous function with 2 inputs needs (), also should have a decloration
var Maths = (x : number, y : number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
} //Needs to be put into an object


//NUMBER 7
class Elephant {
    constructor(public age: number){}
    birthday = function(){
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000copy)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

class Elephante {
    constructor(public age: number){}
    birthday = () => function(){
        this.age++;
    }
}
const Babar = new Elephante(8);
setTimeout(Babar.birthday(), 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)