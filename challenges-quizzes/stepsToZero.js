export function numberOfSteps(num) {
  let steps = 0;
  for (let i = num; num !== 0; i--) {
    if (num % 2 === 0) {
      num = num / 2;
      steps++;
    }
    if (num % 2 !== 0) {
      num = num - 1;
      steps++;
    }
  }

  return steps;
}
