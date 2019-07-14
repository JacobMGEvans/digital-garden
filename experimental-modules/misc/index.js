const oldArray = [1, 2, 3, 4, 5];
const otherData = [`Jacob`];

const newArray = [...oldArray, ...otherData, `cat`];
console.log(newArray);
