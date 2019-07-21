const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

/**
 *
 * @param {Integer} number
 * @return {Array} [PrimeCheck, EvenCheck, MultipleOfTenCheck]
 * @Array -
 * check if prime,
 * check if even,
 * check if multiple of 10
 */
export const numberProperty = n => [isPrime(n), n % 2 === 0, n % 10 === 0];
