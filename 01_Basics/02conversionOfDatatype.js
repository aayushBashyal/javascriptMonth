let score = '1111abc';

console.log(typeof score); // number


// When retaining from frontend to backend, no guarantee that it is number. it is often necessary to convert data types.
let valueOfScore = Number(score);
console.log(valueOfScore); // NaN . We don't want NaN, we want 1111
console.log(typeof valueOfScore); // number . but still NaN

// To solve this, we can use parseInt or parseFloat
console.log(parseInt(score)); // 1111
console.log(parseInt(score, 2)); // 15 is the radix, it means we are parsing as binary

let isLoggedIn = undefined;
console.log(Boolean(isLoggedIn)); // False