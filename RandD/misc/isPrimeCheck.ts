const isPrime = (num: number) => num > 1 && Array(Math.floor(Math.sqrt(num)) - 1).fill(1).every((_, i) => num % (i + 2) !== 0);


/**
 *
 * @param {Integer} number
 * @return {Array} -  [isPrime, isEven, isMultipleOf10]
 * @Array -
 * check if prime,
 * check if even,
 * check if multiple of 10
 */
export const numberProperty = (n: number) => [isPrime(n), n % 2 === 0, n % 10 === 0];
