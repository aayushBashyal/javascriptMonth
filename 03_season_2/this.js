"use strict";
// This in js 
// this in global space
console.log(this); // window

// this inside a function
function fn() {
    console.log(this); // window
}
fn();
// fn();
// this in strict mode (this substitution)
// this value depends on how this is called (window)

// this inside a object's method
// call apply bind methods (sharing methods). 
// Let's share a method between two objects

const obj1 = {
    name: "obj1",
    getName: function() {
        console.log(this.name);
    }
};

const obj2 = {
    name: "obj2"
};

// obj1.getName();
// obj2.getName = obj1.getName;

obj1.getName.call(obj2); // obj2/

// call() is used to set this 
const obj12 = {
    name: "obj12",
};

function sayHello(age, city) {
    console.log(`Hello ${this.name}, you are ${age} years old and you live in ${city}`);
}

sayHello.call(obj12, 21, "Kathmandu");






// bind() — Doesn’t call immediately; returns a new function with fixed this
// const newFunc = functionName.bind(thisValue, arg1, arg2, ...)

// const person = { name: "Charlie" };

// function sayHello(age, city) {
//   console.log(`Hello, I'm ${this.name}, ${age} years old from ${city}`);
// }

// // bind creates a new function
// const greetCharlie = sayHello.bind(person, 22, "Paris");

// // now you can call it later
// greetCharlie();  

const sayhello12 = sayHello.bind(obj12, 21, "Kathmandu"); // Hello obj12, you are 21 years old and you live in Kathmandu

sayhello12();


// this inside arrow function.
// Arrow functions do not have their own this; they inherit this from the surrounding (lexical) context.


const arrObj = {
    name: "arrObj",
    arrowFn: () => {
        console.log(this); // undefined (in strict mode) or window.name (in non-strict mode)
    }
}
arrObj.arrowFn();
