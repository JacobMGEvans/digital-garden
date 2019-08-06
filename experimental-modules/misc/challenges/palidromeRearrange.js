function palindromeRearranging(inputString) {
  const arrAlp = new Array(26).fill(0);
  let counter = 0;
  for (let i = 0; i < inputString.length; i++) {
    const c = inputString[i].charCodeAt() - 97;
    arrAlp[c]++;
  }
  for (let i = 0; i < arrAlp.length; i++) { counter = arrAlp[i] % 2 === 1 ? counter + 1 : counter; }
  return inputString.length % 2 === counter;
}
// palindromeRearranging(`baababbb`);
console.log(palindromeRearranging(`aaabb`));
