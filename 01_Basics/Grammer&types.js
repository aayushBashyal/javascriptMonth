// // // This will convert 10101 from binary to decimal
// // console.log(parseInt("10101",2));   // 21
// // console.log(parseInt("10101") + " " + typeof parseInt("10101"));      // 10101

// // // Another way of converting string into number 
// // console.log(typeof +"10101");       // Strings can be converted into number by adding + before the actual string

// // Literals

// const cart = ["shoes", "pants", "kurta"];
// const incompleteCart = ["shoes", , , "kurta"];  // It will create an empty slot in the array
// console.log(cart);
// console.log(incompleteCart);
// console.log(incompleteCart[1]);  // undefined

// //the second and third elements are empty slots, not undefined. If we try to access them, it will return undefined

const myList = [
    "home",
    "school",
    "hospital",
];
console.log(myList); // Trailing commas are ignored in arrays they jut make the code cleaner

// Boolean literals 
const isLoggedInPrimitive = false;
const isLoggedInObject = new Boolean(false);

if (isLoggedInPrimitive) {
    console.log("isLoggedInPrimitive is true");
} else {
    console.log("isLoggedInPrimitive is false");
}


if (isLoggedInObject) {
    console.log("isLoggedInObject is true");
} else {
    console.log("isLoggedInObject is false");
}

// Reason: All objects are truthy in js. So, even if the value of the object is false, it will be treated as true in conditional statements


// Numerical literals 
// Integral literals
const decimalLiteral = 42;
const hexadecimalLiteral = 0x2A;   // 42 in hexadecimal
const binaryLiteral = 0b101010;    // 42 in binary
const octalLiteral = 0o52;         // 42 in octal
const bigIntLiteral = 9007199254741991n; // BigInt literal

// Floating-point literals
const floatLiteral = 3.14;
const exponentialLiteral = 1.5e3; // 1.5 * 10^3 = 1500


// Object literals
const person = {
    name: "John",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

console.log(person);

// Property names that are not valid identifiers cannot be accessed as a dot (.) property.
const unusualPropertyNames = {
    "": "An empty string",
    "!": "Bang!",
};
/*
console.log(unusualPropertyNames.""); // SyntaxError
console.log(unusualPropertyNames.!); // SyntaxError 
*/

console.log(unusualPropertyNames[""]); // Correct way to access such properties
console.log(unusualPropertyNames["!"]); // Correct way to access such properties





// Object Literals 
/*
    __proto__   :   set parent object
    handler      :   shortcut for handler: handler
    sayHi()      :   shorter way to write methods
    super       :   call parent method inside child
    ["prop_" + x]:   make dynamic property names
*/

// Examplde code 
name = "Car";
const cars = {
    __proto__: null,
    name,
    wheels : 4,
    start() {
        console.log("car started");
    }
};

const bmw = {
    __proto__: cars,
    color: "red",
    navigation: 1,
    // console.log(super.wheels)  // Error, because there is no parent object;
    // console.log(this.wheels)  // works
    wheelsnum () { return super.wheels; },
    ["property" + (()=> 1916)() ]: "value"  // Dynamic property name
};

console.log(bmw.wheelsnum());
bmw.start();
console.log(bmw.name , cars.name);  // Car Car


//Reg ex literals : RegEx will be covered in detail later
const regex1 = /ab+c/;
const regex2 = new RegExp("ab+c");

console.log(regex1, regex2);
console.log(regex1.test("abbbbc"));  // true
console.log(regex2.test("ac"));      // false


// Tagged template literals 
