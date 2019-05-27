// Composition

const f = x => x + 2;
const g = x => x * 3;

console.log(f(g(3))); // output: 11

const scream = str => str.toUpperCase();
const exlaim = str => `${str}!`;
const repeat = str => `${str}${str}`;

/**
 * compose takes in functions & returns their curried values
 * @param  {...any} fns rest of functions passed in
 *  @return composition of functions returned values from right to left
 *
 * @example
 * const withExuberance = compose(
 * repeat,
 * exlaim,
 * scream
 * );
 * console.log(withExuberance(`Hello World`));
 * OUTPUT: `Hello World Hello World!`
 *
 */
export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);
