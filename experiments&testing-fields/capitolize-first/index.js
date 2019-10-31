const TEST_STRING = `HELLO WORLD OF PEOPLE...`;
const TEST_STRING2 = `people are everywhere?`;

const TypeCheck = value => typeof value === `string`;

const SwitchReducer = (letter, ind, arr) => {
  switch (true) {
    case ind === 0 && TypeCheck(letter):
      letter.toUpperCase();
      break;
    case letter === ` `:
      arr[ind + 1].toUpperCase();
      break;
    case TypeCheck(letter):
      letter.toLowerCase();
      break;
    default:
      break;
  }
};
/**
 * @function capitolizeFirst - Convert sentence to uppercase all the first letters for each word in a sentence.
 * @param {...String} String can take in sentences as seperate arguments
 * @return {Array} Array of converted strings.
 * @example {Input => Output} 'HeLlO WOrLd' => 'Hello World'
 */
const capitolizeFirst = (...args) =>
  [...args].map(strings =>
    Array.from(strings).map(SwitchReducer)
  );

capitolizeFirst(TEST_STRING, TEST_STRING2);
