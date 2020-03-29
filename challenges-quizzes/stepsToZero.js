function numberOfSteps(num) {
  let N = num;
  for (let i = 0; N === 0; i++) {
    if (N % 2 === 0) {
      N / 2;
    }
    if (N % 2 !== 0) {
      N - 1;
    }
    console.log(N, `Number`, i, `step`);
  }
}
console.log(numberOfSteps(16));
