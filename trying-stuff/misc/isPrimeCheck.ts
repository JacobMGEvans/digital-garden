const isPrime = (num: number) => num > 1 && Array(Math.floor(Math.sqrt(num)) - 1).fill(1).every((_, i) => num % (i + 2) !== 0);

export const numberProperty = (n: number) => [isPrime(n), n % 2 === 0, n % 10 === 0];
