// Object and object constructor;
const myObject = {
    property: "value1",
    otherproperty:77,
    "obnoxious property": function(){
        // do stuff;
    }
}

// To retrive the infromation from the object using dot and braket notations;

// 1. Dot notation;
myObject.property // 'value'

// Braket notation;
myObject["obnoxious property"]; // funcction;


// Creating objects 

const playerOneName = 'tim';
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMaker = "O";

// Example two;
const playerOne = {
    name:"tim",
    marker:"X"
}

const playerTwo  = {
    name:"jenn",
    marker:"O"
}


// Object Constructor;
function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(`hello ${this.name}`);
    }
}
const playerONE = new Player("Nitin", "X");
console.log(playerONE.sayName);

function God(name,marker){
    if(!new.target){
        throw Error("You must use new operator to call the function");
       
    }
     this.name = name;
        this.marker = marker;
        this.sayName = function(){
            console.log(this.name);
        };
}
const newGod = new  God("Shiva", "X");
console.log(newGod.name);


// Q1: write a constructor for making "book" oject "we will revisit this in next prooject" Your book object should have the title , author the number of of pages and whether or not have read the book; 
function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use new for the object constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let yesOrNo = "";
        if(this.read){
            yesOrNo = "Alredy read!";
        }
        else{
              yesOrNo = "Not Read yet!"
        }

          return `The ${this.title} By ${this.author}, ${this.pages} pages, ${yesOrNo}`;
          
    }
} 

const HarryPotter = new Book("harry Potter and philosohper stone", "j-K Rolling", 1025, false);
console.log(HarryPotter.info());



// Prototype is another object that inharited by original object;
// Which means the original object has access to protypes object; 
// 1. All objects iin javaScript have a prototypes;

// 2. The Prototype is anotherr Object; 
// it has every methods and Propoerties like function objects;
// 3.Accessing an objects Prototype;

// console.log(Object.getPrototypeOf(playerONE) === Player.prototype);
Object.getPrototypeOf(playerONE) === Player.prototype; // true;
Object.getPrototypeOf(playerTwo) === Player.prototype;  // true;

Object.getPrototypeOf(playerONE) === Object.getPrototypeOf(playerTwo); // true; 

// so if we defined any propertirs on Player.prototype weill appearn in PlayerOne and PlayerTwo;

Player.prototype.sayHello = function(){
    console.log("Hello I'm Nitin");
}

playerONE.sayHello();

// Here we crated a method in PlayerOne.prototype this method is avalible for player1 and player2; 


Object.getPrototypeOf(Player.prototype)

console.log(playerONE.valueOf());

// The valueOf() function in not defined in playerOne but its defined in Object.prototype;
// Reason:
// Object.getPrototypePOf(playerOne.prototype) === Object.proptotype;
// That's the rason it has the valueOf method inside the PlayerOne;



function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello i'm ${this.name}!`);
};

function Playerr(name , marker){
    this.name = name;
    this.marker = marker;
}


Playerr.prototype.getMarker = function(){
    console.log(`My marker is ${this.marker}`);
};

Object.getPrototypeOf(Playerr.prototype)// return Object.prototype;

// Now make Player Object inherit from person;
Object.setPrototypeOf(Playerr.prototype, Person.prototype);
Object.getPrototypeOf(Playerr.prototype); // it wil return the person protytpe;

const Player1 = new Playerr("Ntin", "x");
const Player2 = new Playerr("Mike", "M");

Player1.sayName();
Player2.sayName();
Player1.getMarker();