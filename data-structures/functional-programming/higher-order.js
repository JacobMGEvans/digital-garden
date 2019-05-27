/*  Higher Order Function
 1. Accepts a function as an argument
 2. Returns a new Function */

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count: ${++count}`);
    return fn(...args);
  };
};
const add = (x, y) => x + y;
const countedAdd = withCount(add);
console.log(countedAdd(1, 2));
console.log(countedAdd(2, 2));

//* Immutable Data
//* Mutable = can be changed after creation
//* immuatable = cant be changed after creation

//* const a = [1, 2, 3];
//* const b = a;
//* b.push(4);
//* console.log(a);
//* OUTPUT: [1, 2, 3, 4]

/** A push curried function that doesn't mutate the original array
 * @function push(Any)(Array)
 * @type{function(Any): function(Array): Array}
 * @return Array
 */
export const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

//* const a = [1, 2, 3];
//* const b = push(4)(a);
//* console.log(a); // [1,2,3]
//* console.log(b); // [1,2,3,4]
