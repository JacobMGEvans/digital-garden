let steps = 0;
function numberOfSteps(num) {
  for (let i = 0; i !== 0; i++) {
    if (num % 2 === 0) {
      num / 2;
      steps++;
    }
    if (num % 2 !== 0) {
      num - 1;
      steps++;
    }
  }

  return steps;
}

console.log(numberOfSteps(8));
