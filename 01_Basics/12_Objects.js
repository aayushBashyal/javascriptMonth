// Objects can either be declared using literal or constructor 
// Literal bata object banayeu bhane singleton bandaina, constructor bata banayeu vane singleton object banxa 


//Object Literals
const mySymbol = Symbol("mykey1");

// Use sq brackets for symbols in obj
const myProperties = {
    firstName: "Ayush",
    [mySymbol] : "ayush",
    lastName: "Bashyal",
    'address': "Bhairhawa",
    email: "xyz@gf.com",
    isOrdinary: false
};

console.log(myProperties.firstName); // Ayush
//              OR 
console.log(myProperties["firstName"]); // Ayush
console.log(myProperties.address);
console.log(typeof myProperties[mySymbol]);
console.log(myProperties);

// If you wanted to freeze an object (deny any changes), freeze them.
Object.freeze(myProperties);
myProperties.email = "xyz@ilovemomo.com"; // Unchanged, no errors thrown :)

////////////// Take a symbol, add it to the keys of an object and try to print
// Answer above... 



