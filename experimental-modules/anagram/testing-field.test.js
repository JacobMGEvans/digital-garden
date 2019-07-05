import { convertAnagram } from "./experimental-field";

describe(`experimental-coding modules`, async () => {
  test(`should recieve string and convert it to an anagram with no side effects`, async () => {
    const TEST_STRING = `HELLOWORLD`;
    const returnedString = convertAnagram(TEST_STRING);

    expect(returnedString !== TEST_STRING).toBe(true);
  });
  test(`Is creating an anagram of a String`, async () => {
    const TEST_STRING = `PROGRAMMING`;
    const returnedString = convertAnagram(TEST_STRING);
    const sortedOriginal = [...TEST_STRING].sort();
    const sortedReturned = [...returnedString].sort();
    expect(sortedOriginal === sortedReturned).toBe(true);
  });
});
