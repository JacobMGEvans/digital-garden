const isVowel = (chck) => [`a`, `e`, `i`, `o`, `u`].indexOf(chck.toLowerCase()) !== -1;

const vowelSubstrings = (str) => {
  const substrMap = new Map();

  let string = ``;
  str.split(``).map((ele, i) => {
    if (isVowel(ele) === false) {
      string = ``;
      return;
    }
    string += ele;
    substrMap.set(i, string);
  });

  
  return substrMap;
};
console.log(vowelSubstrings(`fdaarwwieou`));
console.log(vowelSubstrings(`aeillldddaei`));
console.log(vowelSubstrings(`aeioup`));
