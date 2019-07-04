const string = `HELLOWORLD`;
const memory = [];

export const convertAnagram = str => {
  const random = Math.random() * 10;
  let count = 0;
  while (count < str.length) {
    if (random < str.length) memory.push(str.slice(random, random + 1));
    count++;
  }
};
console.log(memory);
console.log(convertAnagram(string));
