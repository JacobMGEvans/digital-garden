//MRE
numCompArrayFiltered = ["air", "fertilizer", "nitrogen"];

denomCompArrayFiltered = ["nitrogen", "nitrogen", "air"];

console.log(
  denomCompArrayFiltered.reduce(function (acc, curr) {
    if (typeof acc[curr] === "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {}),
  "OBJECT"
);
// let finalNumComp = numCompArrayFiltered.filter(val => !denomCompArrayFiltered.includes(val))

// console.log("Final Num Comp: " + finalNumComp + " //(desired result: fertilizer)");

// let finalDenomComp = denomCompArrayFiltered.filter(val => !numCompArrayFiltered.includes(val))

// console.log("Final Denom Comp: " + finalDenomComp + " //(desired result: nitrogen)")

// //IGNORE
// //messing around with counting the times a value repeats
// function getOccurrence(array, value) {
//   let count = 0;
// array.forEach((item) => (item === value && count++));
//   return count;
// }

// console.log(getOccurrence(denomCompArrayFiltered, 'nitrogen'))
