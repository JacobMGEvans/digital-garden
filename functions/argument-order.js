// Argument Order

// callback first then array
const map = (cb) => (array) => array.map(cb);

const arr = [1, 2, 3, 4, 5];

const double = (n) => n * 2;

const withDouble = map(double);
console.log(withDouble(arr));
console.log(withDouble([3, 3, 3, 3, 3, 3]));

// most specific => least specific

const prop = (key) => (obj) => obj[key];
const propName = prop(`name`);

const people = [
  { name: `Jacob` },
  { name: `Sarah` },
  { name: `Kent` },
  { name: `Bob` },
];
console.log(map(propName)(people));
