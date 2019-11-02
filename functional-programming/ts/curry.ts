// Curring

function tsAdd(x: number) {
    return function addNext(y: number): number {
      return x + y;
    };
  }
  
  const tsAddThree = tsAdd(3);
  console.log(tsAddThree(4));
  
  const tsAdd2 = (x: number) => (y: number) => x + y;
  
  console.log(tsAdd2(2)(2));
  