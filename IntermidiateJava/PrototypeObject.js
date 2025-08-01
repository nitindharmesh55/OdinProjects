function Player(name, marker)
{
    this.name = name;
    this.marker = marker;
}
const player = new Player("mike", "x");
console.log(player);

// SafeGurading;

const Stone = function(name, age, race){
    if (!new.target){
        throw Error("You must use New!");
    }
    this.name = name;
    this.age = age;
    this.race = race;
}
const senku = new Stone("senku", 202554, "human");
const chrome = new Stone("Chrome", 25, "human");
const rikuo = new Stone ("rikuo", 252, "Human");

console.log([senku, chrome, rikuo]);


// the Prototypess;
// 1.All objects in Javascript have prototypes;l
// 2. Prototype is just another type of objects
// 3. Prototype have access to all the properties of the original object!

console.log(Object.getPrototypeOf(senku) === Stone.prototype);

// if we update the protype or define someting in side the prrotype it become available in original object ;
Stone.prototype.sayHello = function(){
    console.log("Nitn Love!");
}
senku.sayHello();
rikuo.sayHello();


// Prototypal Inheritance!!
// 1. we can define properties and function among all objects on the prototype to save memory!!

// 2. Senku and rikuo both objects are inherrited from Stone Object 

Object.getPrototypeOf(Stone.prototype) === Object.prototype;
console.log(senku.valueOf());
console.log(Object.prototype.valueOf());


function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log(`Hello I'm ${this.name} From America!`);
}
function Player(name, marker){
    this.name = name;
    this.marker = marker;
}
Player.prototype.getMarker = function(){
    copnsole.log(`my Marker is ${this.marker}`);
}
Object.getPrototypeOf(Player.prototype);

// Make Player object inherit values from Person Objct;
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);
const Player1 = new Player("Nile", "N");
Player1.sayName();