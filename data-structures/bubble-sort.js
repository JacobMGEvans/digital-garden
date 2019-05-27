// bubble sort

// Loop through the array
// if this item > next item, swap them
// indicate a swap occured
// if a swap occured, loop through the array again
// continue looping until no swaps occur
export function bubbleSort(array) {
  let swapped = false;
  do {
    swapped = false;

    array.forEach((element, index) => {
      if (element > array[index + 1]) {
        const temporary = element;
        array[index] = array[index + 1];
        array[index + 1] = temporary;
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

//! bubbleSort() test - works
// const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];
// console.log(bubbleSort(numbers));
