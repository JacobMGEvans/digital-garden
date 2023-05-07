//* MERGE SORT

// Divides the given array into two halves: a left and right sub array
// Calls mergeSort on these sub array
// Once we get to arrays that are less than 2 in length we begin to stitch them up thus leading to or sorted array by the time its all the way back up the stack
export function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  const results = [...sorted, ...left, ...right];
  console.log(results);
  return results;
}

export function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// //! mergeSort
// const numbers = [10, 4, 2, 9, 5, 6, 7, 8, 0];
// console.log(mergeSort(numbers));
