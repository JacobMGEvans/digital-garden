const TEST_STRING = `HELLO WORLD OF PEOPLE...`;
const TEST_STRING2 = `people are everywhere?`;

const TypeCheck = value => typeof value === `string`;

const SwitchReducer = object => {
  switch (object) {
    case object.index === 0 && TypeCheck(object.letter):
      object.letter.toUpperCase();
      break;
    case object.letter === `` && TypeCheck(object.letter):
      object.arr[object.index + 1].toUpperCase();
      break;
    case TypeCheck(object.letter):
      object.letter.toLowerCase();
      break;
    default:
      break;
  }
  return { ...object };
};
/**
 * @function capitolizeFirst - Convert sentence to uppercase all the first letters for each word in a sentence.
 * @param {...String} String can take in sentences as seperate arguments
 * @return {Array} Array of converted strings.
 * @example {Input => Output} 'HeLlO WOrLd' => 'Hello World'
 */
const capitolizeFirst = (...args) =>
  [...args].map(strings =>
    Array.from(strings).map((letter, ind, arr) => {
      const obj = {
        eachLetter: letter,
        index: ind,
        sentenceAr: arr,
      };
      return SwitchReducer(obj);
    })
  );

capitolizeFirst(TEST_STRING, TEST_STRING2);
