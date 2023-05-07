import { test, expect } from 'vitest'
import { mergeSort } from './merge-sort'

test('test mergeSort', () => {
  expect(mergeSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(mergeSort(['f', 'a', 'b', 'c', 'b', 'z'])).toEqual(['a', 'b', 'b', 'c', 'f', 'z']);

  const randomNumArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
  expect(mergeSort(randomNumArray)).toEqual(randomNumArray.sort((a, b) => a - b));
  // log the speed of the mergeSort function vs the built in sort function
  console.time('mergeSort');
  mergeSort(randomNumArray);
  console.timeEnd('mergeSort');
  console.time('built-in sort');
  randomNumArray.sort((a, b) => a - b);
  console.timeEnd('built-in sort');
})
