// interface ReturnBody {
//   number: number;
//   indexOf: number;
//   arrCopy: Array<any[]>;
// }

// const numAr = [1, 2, 3, 4, 5, 6];
// function findEleInd(termN: number, arrCh: any[], i: number): ReturnBody {
//   console.log(i);
//   if (termN !== arrCh[i]) {
//     return findEleInd(termN, arrCh, i + 1);
//   }
//   return { number: arrCh[i], indexOf: i, arrCopy: [...arrCh] };
// }
// console.log(findEleInd(3, numAr, 0));

function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  } else {
    console.log(x);
    console.log(y);
    return gcd(y, x % y);
  }
}
console.log(gcd(123432, 120));

// let f: number | any[];
// f = f = 1;
// function fib(n: number) {
//   if (n < 3) return 1;

//   if (f[n] === 0) f[n] = fib(n - 1) + fib(n - 2);

//   return f[n];
// }
// console.log(fib(100));
