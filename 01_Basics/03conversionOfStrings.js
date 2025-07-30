let num1 = "10";
let num2 = 20;;
let num3 = "20";
let num4 = 10;

console.log(num1 + num2); // "1020" - string concatenation
console.log(num1 - num2); // -10 - string to number conversion

console.log(num1 + num3); // "1020" - string concatenation
console.log(num1 - num3); // -10 - string to number conversion

console.log(num4 + num3); // "1020" - string concatenation
console.log(num4 - num3); // -10 - string to number conversion

console.log(2 + 2 + "2"); // "42" - string concatenation
console.log(2 + "2" + 2); // "222" - string concatenation
console.log("2" + 2 + 2); // "222" - string concatenation

console.log(2 - 2 - "2"); // -2
console.log(2 - "2" - 2); // -2
console.log("2" - 2 - 2); // -2


// Prefix and postfix increment 
let a = 5;
let c = a++; // Postfix increment
let b = ++a; // Prefix increment

console.log(c); // 5
console.log(b); // 7

