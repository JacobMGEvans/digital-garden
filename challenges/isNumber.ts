var isNumber = function(s: string) {
    if(s==="0") return true
    let fl: boolean
    let i: boolean
      fl = !!parseFloat(s)
    console.log(fl)
      i = !!parseInt(s)
    console.log(i)
     if ((i === true) || ((fl && i) === true)) {
            return true
        }else{
            return false
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