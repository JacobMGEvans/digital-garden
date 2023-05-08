const oldArray = [1, 2, 3, 4, 5];
const otherData = ['Jacob'];
const animalNames = { cat: 'furball', dog: 'sirbarksalot' };

const pointFreeDoubleInt = (ele: number | string): number | string => {
  if (typeof ele === 'number' && Number.isInteger(ele)) {
    return ele * 2;
  }
  return ele;
};

const newArray: (number | string)[] = [
  ...oldArray,
  ...otherData,
  ...Object.values(animalNames)
].map(pointFreeDoubleInt);

console.log(newArray);

const isObject = (input: any): input is Record<string, unknown> => typeof input === 'object' && !Array.isArray(input);

console.log(isObject(animalNames));

