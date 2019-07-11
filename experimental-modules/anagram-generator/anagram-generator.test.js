import { convertAnagram } from "./index";

describe(`anagram-generator test suite`, () => {
  test(`should receive string and convert it to an anagram with no side effects`, () => {
    const TEST_STRING = `HELLOWORLD`;
    const returnedString = convertAnagram(TEST_STRING);

    const negativeReturn = convertAnagram(123);
    expect(negativeReturn[`message`]).toBe(`Argument Must Be A String`);
    expect(returnedString !== TEST_STRING).toBe(true);
  });
  test(`Is creating an anagram of a String`, () => {
    const TEST_STRING = `PROGRAMMING`;
    const returnedString = convertAnagram(TEST_STRING);
    const sortedOriginal = [...TEST_STRING].sort();
    const sortedReturned = [...returnedString].sort();
    const boolReturned = sortedOriginal.every((ele, i) => ele === sortedReturned[i]);
    expect(boolReturned).toBe(true);
  });
});
