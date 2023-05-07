// Example from MDN documentaion

// to enable deep level flatten use recursion with reduce and concat
const testArray = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

export function flattenDeep<T>(arr1: (T | T[])[]): T[] {
  return arr1.reduce((acc: T[], val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [] as T[]);
}

console.log(flattenDeep(testArray));
