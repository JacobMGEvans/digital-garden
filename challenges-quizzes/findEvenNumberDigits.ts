const findNumbers = (nums: number[]) =>
  nums
    .map((ele) => ele.toString().length % 2 === 0)
    .filter((ele) => ele === true).length;

console.log(findNumbers([12, 345, 2, 6, 7896]));
