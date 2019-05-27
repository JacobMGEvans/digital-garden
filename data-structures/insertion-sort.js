// Insertion Sort

// Uses nested loops
// assumes a sorted list of length 1
// compares the next item, and insertts it before
// or after depending on the comparison

export function insertionSort(array) {
  let i;
  let j;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  return array;
}
//! insertionSort() test - works
const numbers = [10, 4, 2, 9, 5, 6, 7, 8, 0];
console.log(insertionSort(numbers));
