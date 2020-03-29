let steps = 0;
function numberOfSteps(num) {
  let int = num;
  for (let i = int; int !== 0; i--) {
    if (int % 2 === 0) {
      int = int / 2;
      steps++;
    }
    if (int % 2 !== 0) {
      int = int - 1;
      steps++;
    }
  }

  return steps;
}

console.log(numberOfSteps(8));
