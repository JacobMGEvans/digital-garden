/* eslint-disable array-callback-return */
function palindromeRearranging(inputString: string) {
  const arrAlp = new Array(26).fill(0);
  let counter = 0;
  [...inputString].map((ele, i) => {
    const c = ele.charCodeAt(i) - 97;
    arrAlp[c]++;
  });

  for (const count of arrAlp) {
    counter = count % 2 === 1 ? counter + 1 : counter;
  }
  return inputString.length % 2 === counter;
}
// palindromeRearranging(`baababbb`);
console.log(palindromeRearranging(`aaabb`));
