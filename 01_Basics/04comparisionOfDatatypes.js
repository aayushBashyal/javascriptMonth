console.log(NaN === NaN); // false - NaN is not equal to itself in strict equality
console.log(NaN == NaN); // false - NaN is not equal to itself in loose equality

// Anything compared with NaN will return false

console.log(null > -1); // true
console.log(null == 0); // false 

// Equality and comparision behaves differently for null and undefined
// Equality just check for the equality.
// Comparision converts null and undefined to numbers before comparing and then compares them.


