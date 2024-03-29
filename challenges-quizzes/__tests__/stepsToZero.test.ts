import { test, expect } from "vitest"
import { numberOfSteps } from "../stepsToZero";

test(`should resolve 14 to output 6`, () => {
  expect(numberOfSteps(14)).toBe(6);
});
test(`should resolve 14 to output 6`, () => {
  expect(numberOfSteps(10)).toBe(5);
});
test(`should resolve 14 to output 6`, () => {
  expect(numberOfSteps(8)).toBe(4);
});
test(`should resolve 1000000 to output 26`, () => {
  expect(numberOfSteps(1000000)).toBe(26);
});
