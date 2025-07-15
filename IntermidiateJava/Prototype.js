// Protype is Object inherite from Original Object;
// 1. All object in Javasscript have a prototpe!;
// 2. the Prototype is another Object
// 3. the protype it's inherit from the original object it has all the properties and methods from the orgignal objects;

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}
const Player1 = new Player("Nitin", "x");
const Player2 = new Player("Mike", "N");

Object.getPrototypeOf(Player1) === Player.prototype;
// here Object.getProtype(player1) will show us the Prototype Object of Player1 chuz every Object in javascript have protype and the prototype of Player is inherit from the Player1 original Oject;

// Object.getPrototypeOf(Player1) === Player.prototype is true cuz every methods from Player1 object it also the Player Object that' why their Protytpe also the same the Properies and Methods;


// if we define any peroerties or method in protype object it will also be created in original Object!!;

Player.prototype.sayHello = function(){
    console.log(`Hello ${this.name}`);
}

Player1.sayHello();



// Reason why we define the Object Protype!!;

// 1. we can define properties and function common among all the prottotype; to save memory; 

// 2. Prototypal inheritance Like  Player1 and Player 2 objects are inherited from the Player.protype;


// 
Object.getPrototypeOf(Player.prototype) === Object.prototype;
//  the protype of Player.prototype is equal to Object.prototype;
// it means Player.prrotype have the methods and Properties from the Object.prototype!!;
Player1.valueOf();

function  Person(name){
    this.name = name;

}
Person.prototype.sayNitin = function(){
    console.log("Nitin");
}


Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

Player1.sayNitin();