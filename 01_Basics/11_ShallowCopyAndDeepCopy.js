// Shallow copy

const originalArray = [1, 2, [3, 4], 5];

const shallowCopy1 = {...originalArray}; // Using spread operator
shallowCopy1[2][0] = 99; // Modifying nested array in shallow copy
const shallowCopy2 = originalArray.slice(); // Using slice method
const shallowCopy3 = Array.from(originalArray); // Using Array.from meth;od

console.log(originalArray); // [1, 2, [99, 4], 5]

//************** Deep copy ************** */
const nestedArray = [1, 2, [3, 4], 5];
const deepCopy1 = JSON.parse(JSON.stringify(nestedArray)); // Using JSON methods

const deepCopy2 = structuredClone(nestedArray); // Using newer structuredClone method

