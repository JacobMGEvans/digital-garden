import { test, expect } from 'vitest'
import { quickSort } from './quick-sort'

test('test quickStort', () => {
  expect(quickSort([2, 1, 3])).toEqual([1, 2, 3]);
  expect(quickSort(['f', 'a', 'b', 'c', 'b', 'z'])).toEqual(['a', 'b', 'b', 'c', 'f', 'z']);

  const randomNumArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
  expect(quickSort(randomNumArray)).toEqual(randomNumArray.sort((a, b) => a - b));
  // log the speed of the quickStort function vs the built in sort function
  console.time('quickStort');
  quickSort(randomNumArray);
  console.timeEnd('quickStort');
  console.time('built-in sort');
  randomNumArray.sort((a, b) => a - b);
  console.timeEnd('built-in sort');
})
