function ScaleBalancing(strArr) {
  const scaleToBalance = JSON.parse(strArr[0]);
  const weightBalancers = JSON.parse(strArr[1]);
  //   if (scaleToBalance[0] === scaleToBalance[1]) return `Equals`;

  const scaleDiff = Math.abs((scaleToBalance[0]) - scaleToBalance[1]);
  if (weightBalancers.includes(scaleDiff)) return scaleDiff.toString();

  let counter = 0;
  let lowestBalancerCombo = [];
  if (scaleDiff === lowestBalancerCombo) {
    return lowestBalancerCombo;
  }
  lowestBalancerCombo = weightBalancers.indexOf(scaleDiff % weightBalancers[counter]);
  counter++;
  
  //   ScaleBalancing(weightBalancers, counter++);
  console.log(lowestBalancerCombo);
  console.log(scaleDiff);
  console.log(weightBalancers);
  console.log(scaleDiff % weightBalancers);
  //   console.log(ScaleBalancing());

  return `not possible`;
}
// console.log(ScaleBalancing([`[3, 4]`, `[1, 2, 7, 7]`]));
console.log(ScaleBalancing([`[13, 4]`, `[1, 2, 3, 6, 14]`]));
// console.log(ScaleBalancing([`[5, 5]`, `[1, 2, 3]`]));
