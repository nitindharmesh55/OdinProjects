// You have an array of user object each one has user.name write code that convert this into array of anme
let john = { name: "John", age: 25  , surname:"Smith", id:1};
let pete = { name: "Pete", age: 30 , surname:"Hunt", id:2 };
let mary = { name: "Mary", age: 28 , surname:"key", id:3};

let users = [ john, pete, mary ];

let names = users.map(item => item.age);

console.log( names ); // John, Pete, Mary

// userMapped;s
let userMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id:user.id
}));

console.log(userMapped[0].fullName);

// Sort age by nubers;
function sortByAge(arr){
    return arr.sort((a,b) => a.age - b.age);
}

console.log(sortByAge(users));
console.log(users[0].name);
console.log(users[1].name)







// Get Average age:
// Write function getAverageAge(users) that gets an array of object with property age and the return the avarage age;
function getAverageAge(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i].age;
    }
    return Math.round(sum / arr.length);
}

console.log(getAverageAge(users));

// Lets say we rececived an array of users in the form {id:..., name and age}
// Create a fuction groupById(arr) that creates an object from it with id as the key and items as values;

let people = [
    {id:'john', name:"john Smith", age:20},
    {id:'ann', name:"Ann Smith", age:24},
    {id:"pete", name:"pete Peterson",age:31}
];

function groupById(arr){
    return arr.reduce((obj, value) =>{
        obj[value.id] = value;
        return obj;
    })
};

let userById = groupById(people);
console.log(userById);
