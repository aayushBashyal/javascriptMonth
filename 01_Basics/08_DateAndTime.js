// Let's try to calculate how much time do i need to compile this program 
const timestamp1 = Date.now();

// const now = new Date();
// console.log(`Current date: ${now}`);    // Seconds since epoch



// // Date object creation
// const date1 = new Date(2023, 9, 1, 12, 30, 0); // Year, month, day, hours, minutes, seconds
// console.log(`Date 2: ${date1}`);

console.log(new Date()); // Current date and time

const bday = new Date("2004-05-01") // yyyy-MM-dd format
console.log(`My birthday: ${bday.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})}`); // My birthday: 1 May 2004



// const fromTimestamp = new Date(0);  // Epoch time 
// console.log(fromTimestamp + '\n');  // Thu Jan 01 1970


// const timestamp2 = Date.now();
// const newdate = new Date()
// console.log(`Typeof Date.now(): ${typeof timestamp2} , newdate = ${typeof newdate}`); // number
// console.log(`newdate: ${newdate} Readable : ${newdate.toDateString()}\n`); // Current date and time


// console.log(`In local time in ne-NP: ${newdate.toLocaleString('ne-NP')}\n`); // Local time format Nepali ma lekhxa date terminal ma 



// console.log(timestamp2 - fromTimestamp.getTime()); // Time since epoch in milliseconds

// console.log(fromTimestamp.toISOString()); // ISO format: 1970-01-01T00:00:00.000Z

// console.log(`Today is ${new Date(timestamp2).getDay()} day`);



// console.log(timestamp2 - timestamp1);


// // JS is planning to use Temporal API for better date and time handling in the future
// // For now, we can use the Date object for basic operations


// //TL;DR:
// // Use .toDateString() for better readability of dates
