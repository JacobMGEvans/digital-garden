// Curring

function add(x) {
  return function addNext(y) {
    return x + y;
  };
}

const addThree = add(3);
console.log(addThree(4));

const add2 = x => y => x + y;

console.log(add2(2)(2));
