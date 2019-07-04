import { convertAnagram } from "./experimental-field";

describe(`experimental-coding modules`, async () => {
  test(`should recieve string and convert it to an anagram with no side effects`, async () => {
    const TEST_STRING = `HELLOWORLD`;
    const returnedString = convertAnagram(TEST_STRING);
    expect(returnedString !== TEST_STRING);
  });
});
