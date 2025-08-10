let person = {
    name:"Nitin",
    age: 22,
    email:"nitin@google.com",
    
    get Adddress(){
        return (
            `Hey there, i'm ${this.name} and i'm ${this.age} years old, well if you want my email here You ${this.email}`
        )
    },

   set Adddress(info){
      this.name = info.name,
      this.age = info.age,
      this.email = info.email

    }
}

console.log(person.Adddress);

person.Adddress = {
    name:"Spetia",
    age:24,
    email:"spetia@google.com"
}
console.log(person.Adddress);


let bike = {
    name:"GT-650",
    model:650,
    mileage:"22km"
}


Object.defineProperties(bike, {
    Bikename:{
        get(){
            return `This Bike ${this.name}`
        },
        set(value){
           this.name = value;
        }
    }
    ,
    Bikemodel:{
        get(){
            return `The Price of Bike is ${this.model}`
        },
        set(value){
            this.model = value;
        }

    },
    Km:{
      get(){
        return `the mileAge of this bike is ${this.mileAge}`
      },
      set(value){
        this.mileage = value
      }
    }
})
 
console.log("\n");
console.log(bike.name);
console.log(bike.model);
console.log(bike.mileage);

bike.Bikename = "Yamaha";
bike.Bikemodel = "Ninja";
bike.Km = "55km"

console.log(bike.name);
console.log(bike.model);
console.log(bike.mileage);



// Smarter Getters /Setters!;

let Anime = {
    get name(){
        return this.NAME;
    },

    set name(value){
        if(value.length < 4)
        {
            console.log("Name is too short , need at least 4 charaacters");
            return;
        }
        this.NAME = value;
    }
}

Anime.name = "pil";
console.log(Anime.name);


function User(name, age){
    this.name = name;
    this.age = age;
    this.birth = this.birth

}
let john = new User("john", 25, new Date(1992, 6 , 1));

Object.defineProperty(john, "love",{
    get(){
        let todayYear =  new Date().getFullYear();
        return todayYear - this.birth.getFullYear();
    }
})
console.log(john.birth);