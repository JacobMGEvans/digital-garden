const oldArray = [1, 2, 3, 4, 5];
const otherData = [`Jacob`];
const animalNames = { cat: `furball`, dog: `sirbarksalot` };

const pointFreeDoubleInt = (ele) => Number.isInteger(ele) ? ele * 12 : ele;
const newArray = [...oldArray, ...otherData, ...Object.values(animalNames)].map(pointFreeDoubleInt);
console.log(newArray); // [ 12, 24, 36, 48, 60, 'Jacob', 'furball', 'sirbarksalot' ]
