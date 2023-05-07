// example from MDN documentaion

// to enable deep level flatten use recursion with reduce and concat
const testArray = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

export function flattenDeep(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

console.log(flattenDeep(testArray));
