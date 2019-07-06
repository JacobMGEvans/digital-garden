const TEST_STRING = `HELLO WORLD OF PEOPLE...`;
const TEST_STRING2 = `people are everywhere?`;

/**
 * @function capitolizeFirst - Convert sentence to uppercase all the first letters for each word in a sentence.
 * @param {...String} String can take in sentences as seperate arguments
 * @return {Array} Array of converted strings.
 * @example {Input => Output} 'HeLlO WOrLd' => 'Hello World'
 */
const capitolizeFirst = (...args) => {
  const arrStr = [...[...args]];
  console.log(arrStr);
  const mappedArr = arrStr.map(ele => ele);
};
capitolizeFirst(TEST_STRING, TEST_STRING2);

export { capitolizeFirst };
