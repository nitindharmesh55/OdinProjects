// Closure: A Closure refere to the combination of a function and the surrounding state in which the function was declared! 
// And this surrounding state called lexical Enviorment!!

function makeAdding(firstNumber){
    let first = firstNumber;
    return function reuslting(secondNumber){
        const second = secondNumber;
        return first + second;
    }
}

const add5 = makeAdding(5);
add5(2);
// Lexical enviroment consist of any local variable that were in scope at the time when closure were made
// Here the add5 is refering to the resulting function  which contain the first variable


// Constructordon't provide the automatic safe guarde!
// Factory Function return new Object without using the New keyword when you call the function!1



const User = function(name){
    this.name = name;
    this.discordName = "@" + name;

}

function createUser(name){
    const discordName = "@" + name;
    return {name, discordName}
}
console.log(createUser("NitinDharmesh"));


// Destructuring
const FulllPerson = function(Name, Age, Height, Email){
    this.Name = Name;
    this.Age = Age;
    this.Email = Email;
    this.Height = Height;
}
const Nitin = new FulllPerson("Nitin", 22, "165cm", "purabiyaneetin@gmail.com");

const {Name, Age} = Nitin;
console.log({Name, Age});

// We Got Closure ++ Factory Function!!;

function CreateUser (name){
    const discordName = "@" + name;
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation};
}
const josh = CreateUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName:josh.discordName,
    reputation: josh.getReputation()
})
function createPlayer(name , level){
    const {getReputation, giveReputation} = CreateUser(name);
    const increseLevel = () => level++;
    return {name, getReputation, giveReputation, increseLevel};
}

const Nitinn = createPlayer("nitin", 255);
Nitinn.increseLevel();
console.log({
    name:Nitinn.name,
    Reputation:Nitinn.getReputation(),
    Level:Nitinn.increseLevel()
})

const calculator = (function(){
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a , b) => a * b;
  const div = (a , b) => a / b;
  return {add, sub, mul, div}
})();
console.log(calculator.add(3,5))







const calculatorPrime = function(a, b) {
  const add = () => a + b;
  const sub = () => a - b;
  const mul = () => a * b;
  const div = () => a / b;
  return { add, sub, mul, div };
}

const prime = calculatorPrime(10, 5);

console.log({
  Add: prime.add(),
  Sub: prime.sub(),
  Mul: prime.mul(),
  Div: prime.div()
});