import { numberOfSteps } from "../stepsToZero";

test(`should resolve 14 to output 6`, () => {
  numberOfSteps(14).toBe(6);
});
test(`should resolve 14 to output 6`, () => {
  numberOfSteps(10).toBe(6);
});
