function XO(s) {
  const arr = [...s];
  let countX = 0;
  let countO = 0;
  arr.map((ele, i) => {
    if (ele === `x`) {
      countX++;
      delete arr[i];
    }
    if (ele === `X`) {
      countX++;
      delete arr[i];
    }
    if (ele === `o`) {
      countO++;
      delete arr[i];
    }
    if (ele === `O`) {
      countO++;
      delete arr[i];
    } else {
      delete arr[i];
    }
  });
  const compare = countO === countX;
  return compare;
}

console.log(XO(`xxxoooxxxoooxxxoooxoxoppppppppppppxoooxx`)); // true
// console.log(XO(`ooxx`)); // true
// console.log(XO(`xooxx`)); // false
// console.log(XO(`zpzpzpp`)); // true
// console.log(XO(`zzoo`)); // false
// console.log(XO(`zzoOOOoo`));
