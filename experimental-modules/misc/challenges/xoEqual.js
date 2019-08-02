function XO(s) {}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")); // false
