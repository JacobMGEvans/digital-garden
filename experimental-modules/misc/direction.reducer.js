function dirReduc(arr) {
  let NORTH = 0;
  let EAST = 0;
  let SOUTH = 0;
  let WEST = 0;
  const dict = {
    NORTH: [++NORTH, --SOUTH],
    EAST: [++EAST, --WEST],
    SOUTH: [++SOUTH, --NORTH],
    WEST: [++WEST, --EAST],
  };
  arr.map(ele => {
    const upperEle = ele.toUpperCase();
    switch (upperEle) {
      case `NORTH`:
        dict[ele];
        break;
      case `EAST`:
        dict[ele];
        break;
      case `SOUTH`:
        dict[ele];
        break;
      case `WEST`:
        dict[ele];
        break;
      default:
        console.log(`I SHOULDNT GET HERE`);
    }
  });

  console.log(NORTH, EAST, SOUTH, WEST);
}

dirReduc([`NORTH`, `SOUTH`, `SOUTH`, `EAST`, `WEST`, `NORTH`, `WEST`]);
