const arr = [1, 1, 1, 1, 3, 4, 4, 4, 1234, 1234, 1233];
const obj = { dog: `bark`, cat: `bark`, cow: `moo` };
const deDuplicate = input => [...new Set(input)];

console.log(deDuplicate(arr)); // [ 1, 3, 4, 1234, 1233 ]

const mySet = new Set([1, 2, 1223, 431242, 342345245235, 2123123, 12313]);

// check if prime
// check if even
// check if multiple of 10
const number = evenNum => multipleOfTen => primeEvenTen => [
  evenNum % 2 === 0,
  multipleOfTen % 10 === 0,
  Number.isInteger(primeEvenTen / 3),
];
console.log(number(100)(100)(100));

const xhr = new XMLHttpRequest();


