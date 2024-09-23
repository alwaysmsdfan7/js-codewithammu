// # Primitive

// 7 types:String, null,Number, Boolean,undefined,Symbol,BigInt

const score =  100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 344678932708329n


// Reference (Non primitive)

// Array, Object,Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj= {
    name: "Amanmittrpriya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof heros);