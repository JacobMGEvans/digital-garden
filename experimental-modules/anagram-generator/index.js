/**
 * @function randomIntGenerator used to get random number for string positionrandomizing
 * @param {Integer} ind index passed in to further pseudo randomize
 */
const randomIntGenerator = ind => Math.floor(ind * Math.random() * 10);

/**
 * @function convertAnagram converts a string into an anagram of itself.
 * @param {String} str string to be transformed.
 * @note This could likely be converted to a recursive function.
 */
const convertAnagram = str => {
  if (typeof str !== `string`) return { error: TypeError(`Argument Must Be A String`), message: `Argument Must Be A String` };
  const memory = [];
  const anagramify = (ele, ind) =>
    randomIntGenerator(ind) % 2 ? memory.push(ele) : memory.unshift(ele);

  Array.from(str).map(anagramify);
  return memory.join(``);
};

export { convertAnagram };
