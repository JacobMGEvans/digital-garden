export function numberOfSteps(num: number) {
  let steps = 0;

  for (; num !== 0; num = num % 2 === 0 ? num / 2 : num - 1, steps++);

  return steps;
}