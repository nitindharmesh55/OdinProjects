// Basic Synstax:
// class myClass{
//     constructor(){}
//     method1(),
//     method2(),
//     method3(),
// }

class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
      return `Hello ${this.name}`
    }
}

let user = new User("John");
console.log(user.sayHi());