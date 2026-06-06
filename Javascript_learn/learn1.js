
function greet(){
    console.log("Hello world..");
}

greet();

//using parameter
function add( a , b){
    return a + b;
}

console.log(add(2,5));

//using default value

function myname(name= "guest"){
    return name;
}

console.log("chirag")


const multiply = (a ,b) =>{
    return a * b;
}   

console.log(multiply(5,5));

//setInterval

setInterval(function(){
    console.log("executed");
    
},2000);

// ------------------ Arrays ------------------
let name =["chirag","rahul","pratham","sohan"];

let fruits = ["apple","orange","pineapple","mango"];

console.log(fruits);
console.log(fruits[0]);

//add element at last
fruits.push("Watermelon");
console.log(fruits);

//remove element at last
fruits.pop();
console.log(fruits);


//add element at begining
fruits.unshift("Blueberry");
console.log(fruits);

//remove first element
fruits.shift();
console.log(fruits);

//array length
console.log(fruits.length);

// for(let i =0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }


//------- using forEach method ------------⭐⭐
fruits.forEach(f=>console.log(f));

//Array of Object

let users = [
    {id:1,name:"chirag"},
    {id:2,name:"rahul"},
    {id:3,name:"shaswat"}
]

console.log(users[0].name);

users.forEach(user =>{
    console.log(user.name);
});


// ---------------------- MAP,FILTER,FIND METHODS  ----------------

let numbers = [10,20,30,40,50];
//--- map method --- transform data based on some condition
let result = numbers.map(num =>num *2);
console.log(result);
console.log(numbers);

// --- filter method --- filters data base on condition
console.log(numbers.filter(num => num >25));

// -----find() ---------- return the first element that match condition
console.log(numbers.find(num => num>30));


// ---------------------- Objects in Javascript ----------------------

let user ={
    name:"Chirag Shyam Deshmukh",
    age:24,
    city:"japan"
}
//access object
console.log(user.name);

user.age= 25;
console.log(user);

//add property in object
user.email = "deshmukhchirag178@gmail.com"
console.log(user);

//delete property from object
delete user.city;


//Object with function 
let school = {
    name:"Ishwar Deshmukh English Medium School, Digras",

   schoolName(){
    return this.name;
   }
};

console.log(school.schoolName())


//__________loop through object___________
// for in loop
for(let key in user){
        console.log(key,user[key]);
}


//_____________ Array of Objects _______________
let army = [
    {
        id:1,
        name:"Chirag Deshmukh"
    },
    {
        id:2,
        name:"Saloni Dubey "
    },
    {
        id:3,
        name:"Alex Deshmukh"
    }
];


console.log("MY name is "+army[2].name);

for(let key in army){
    console.log(key ,army[key])
}

//forEach  for Array of objects

army.forEach(user =>{
    console.log(user["name"]);
    console.log(user.id);
})


//______________ Nested Object___________
let newUser = {
    name:"Chirag Deshmukh",
    address:{
        city:"Akola",
        state:"Maharashtra"
    }
}


