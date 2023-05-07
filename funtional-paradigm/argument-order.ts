// Argument Order

type MapCallback<T, U> = (value: T, index: number, array: T[]) => U;

function map<T, U>(cb: MapCallback<T, U>): (array: T[]) => U[] {
  return (array: T[]) => array.map(cb);
}

const arr: number[] = [1, 2, 3, 4, 5];

const double = (n: number): number => n * 2;

const withDouble = map(double);
console.log(withDouble(arr));
console.log(withDouble([3, 3, 3, 3, 3, 3]));

// most specific => least specific

type PropSelector<T, K extends keyof T> = (obj: T) => T[K];

function prop<T, K extends keyof T>(key: K): PropSelector<T, K> {
  return (obj: T) => obj[key];
}

const propName = prop<{ name: string }, 'name'>('name');

const people = [
  { name: `Jacob` },
  { name: `Sarah` },
  { name: `Kent` },
  { name: `Bob` },
];
console.log(map(propName)(people));

