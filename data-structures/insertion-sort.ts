// Insertion Sort

// Uses nested loops
// assumes a sorted list of length 1
// compares the next item, and insertts it before
// or after depending on the comparison

export function insertionSort(array: number[]) {
  for (const item of array) {
    const index = array.indexOf(item);
    for (let i = 0; i < index; i++) {
      if (array[i] > item) {
        array.splice(index, 1);
        array.splice(i, 0, item);
        break;
      }
    }
  }

  return array;
}
//! insertionSort() test - works
const numbers = [10, 4, 2, 9, 5, 6, 7, 8, 0];
console.log(insertionSort(numbers));
