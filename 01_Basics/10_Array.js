const myArray = [1, 2, true, null, undefined, 'Hello', { key: 'value' }, [1, 2, 3]];

// pop 
const poppedValue = myArray.pop(); // Removes the last element, returns it: [1, 2, true, null, undefined, 'Hello', { key: 'value' }] 


// Slice vs Splice
// Slice: Same like python's slice, returns a shallow copy of a portion of an array
//        Does not modify the original array
const slicedArray = myArray.slice(1, 4); // Returns elements from index 1 to 3: [2, true, null]
console.log(slicedArray); // [2, true, null]
console.log(myArray); // Original array is unchanged



// Splice: Modifies the original array, can add or remove elements
const arrToSplice = [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const splicedArray = arrToSplice.splice(8, 5, 20, 30); // At index 8, remove 5 elements and add 20, 30
// [0, 1, 3,  5,  6, 7, 8, 9, 20, 30]
// Replace 1 with 2 in splicedArray2
const splicedArray2 = arrToSplice.splice(1,1,2);
console.log(splicedArray); // 
console.log(arrToSplice); 


// Merge two arrays using spread
fruits = ['Apple', 'Mango', 'Orange'];
veggies = ['cauli', 'cabbage', 'brocolli']

healthyFoods = [...fruits, ...veggies];
console.log(healthyFoods);

// If you have jungled nested array

let nums = [1,[2,4,[5,6],[7,8]]];
flatNums = nums.flat(3);    // Argument = Depth, can also be Infinity.
console.log(flatNums);



