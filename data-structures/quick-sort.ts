// Quick Sort

// Recursive
// We receive an array and pick a "pivot"

/**  Items are compared to the pivot
 * If an item is less than the pivot, put it in the "left" array
 else into the "right" array
 return the array resulting from the quicksort called on the left the pivot and quicksort on the "right"
 * @function quickSort
 * @param Array

 */

export function quickSort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  }
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  const left: T[] = [];
  const right: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    const currentItem = array[i];
    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
