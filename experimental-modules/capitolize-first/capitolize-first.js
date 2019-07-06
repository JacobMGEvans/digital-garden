const TEST_STRING = `HELLO WORLD OF PEOPLE...`;
const TEST_STRING2 = `people are everywhere?`;

const capitolizeFirst = (...args) => {
  /**
   * @arrStr
   *  - array of string passed into the function
   */
  const arrStr = [...args];
  console.log(arrStr);
  const mappedArr = arrStr.map(ele => ele);
};
capitolizeFirst(TEST_STRING, TEST_STRING2);
