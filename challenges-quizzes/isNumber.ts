const isNumber = (s: string): boolean => {
  if (s === "0") return true;

  const fl: boolean = !isNaN(parseFloat(s));
  console.log(fl);

  const i: boolean = !isNaN(parseInt(s));
  console.log(i);

  if (i === true || (fl && i)) {
    return true;
  } else {
    return false;
  }
};


console.log(isNumber("0"))
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false