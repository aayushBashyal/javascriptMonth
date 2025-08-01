    // String interpolation
// const fname = "Dinesh";
// console.log(`Hello, ${fname}.`);

    // Using new keyword to create a string
// const lname = new String("Gaire");
// console.log(`Hello, ${lname[3]}.`);
    // Always use string literals instead of the String object.

/**
 * String objects are stored as key value pairs.
 * lname = {
  0: "G",
  1: "a",
  2: "i",
  3: "r",
  4: "e",
  length: 5,
  [[PrimitiveValue]]: "Gaire", // hidden internal value
  __proto__: String.prototype // gives access to string methods
}

 */

// console.log(lname.__proto__); // Accessing prototype methods



    // deep dive into prototype chain
// console.log(lname.__proto__ === String.prototype);
// console.log(String.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null); // end of prototype chain



    // Substring and slice methods
// const str = "Hello, World!";
// console.log(str.substring(0, 5));
// console.log(str.slice(-10, 9));
    // Conclusion: Use slice for negative indexing.
    
    
    
    
    // Problem statement: 
    /**
     * given a string, "ayush-bashyal-is-awesome".
     * I want to get an array of words seperated by '-'.
     * Expected output: ["ayush", "bashyal", "is", "awesome"]
     */
// const str = "ayush-bashyal-is-awesome";
// const arr = str.split("-");
// console.log(arr); // ["ayush", "bashyal", "is", "awesome"]



