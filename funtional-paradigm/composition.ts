// Composition

const f = (x: number) => x + 2;
const g = (x: number) => x * 3;

console.log(f(g(3))); // output: 11

const scream = (str: string) => str.toUpperCase();
const exlaim = (str: any) => `${str}!`;
const repeat = (str: any) => `${str}${str}`;

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
export const compose = <T>(...fns: ((arg: T) => T)[]): ((arg: T) => T) =>
  (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
