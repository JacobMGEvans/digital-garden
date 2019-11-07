interface ReturnBody {
  number: number;
  indexOf: number;
  arrCopy: Array<any[]>;
}

const numAr = [1, 2, 3, 4, 5, 6];
function findEleInd(termN: number, arrCh: any[], i: number): ReturnBody {
  console.log(i);
  if (termN !== arrCh[i]) {
    return findEleInd(termN, arrCh, i + 1);
  }
  return { number: arrCh[i], indexOf: i, arrCopy: [...arrCh] };
}
console.log(findEleInd(3, numAr, 0));
