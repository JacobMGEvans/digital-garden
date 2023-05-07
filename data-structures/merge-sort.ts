//* MERGE SORT

// Divides the given array into two halves: a left and right sub array
// Calls mergeSort on these sub array
// Once we get to arrays that are less than 2 in length we begin to stitch them up thus leading to or sorted array 
// by the time its all the way back up the stack
export function merge<T>(left: T[], right: T[]): T[] {
  const sorted: T[] = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift()!);
    } else {
      sorted.push(right.shift()!);
    }
  }
  return [...sorted, ...left, ...right];
}

// This mergeSort function is a recursive function that will continue to break down the array into left and right sub arrays until they are less than 2 in length
// The generics here are used to ensure that the array passed in is of the same type as the array that is returned
export function mergeSort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge<T>(mergeSort(left), mergeSort(right));
}

// //! mergeSort
// const numbers = [10, 4, 2, 9, 5, 6, 7, 8, 0];
// console.log(mergeSort(numbers));
