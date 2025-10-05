const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Map 
const convertedScores = scores.map((score) => score / 10);
console.log(convertedScores);  // [1,2,3,4,5,6,7,8,9,10]

// Filter 
const filteredScores = scores.filter((score) => score > 50);
console.log(filteredScores);  // [60,70,80,90,100]

// Reduce 
const sum = scores.reduce((sum, score) => sum + score, 0);
console.log(sum);  // 550

// Chaining
const chainedResult = scores
  .map((score) => score / 10)
  .filter((score) => score > 5)
  .reduce((sum, score) => sum + score, 0);
console.log(chainedResult);  // 40

