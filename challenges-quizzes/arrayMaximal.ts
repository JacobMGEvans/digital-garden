function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  const max = Math.max(...inputArray);
  const nexPlus = inputArray[inputArray.indexOf(max) + 1] || inputArray[inputArray.indexOf(max) - 1];

  return max - nexPlus;
}


console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]));

console.log(arrayMaximalAdjacentDifference([2, 1, 15, -15]));
// arrayMaximalAdjacentDifference([2, 4, 1, 0]);

// arrayMaximalAdjacentDifference([2, 4, 1, 0]);
// arrayMaximalAdjacentDifference([2, 4, 1, 0]);
