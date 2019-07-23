/* eslint-disable no-fallthrough */
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
  const obj = {
    NORTH,
    EAST,
    SOUTH,
    WEST,
  };
  // eslint-disable-next-line no-restricted-syntax
  for (const ele of arr) {
    const upperEle = ele.toUpperCase();

    switch (upperEle) {
      case `NORTH`:
        obj[ele] = dict[ele];
        break;
      case `EAST`:
        obj[ele] = dict[ele];
        break;
      case `SOUTH`:
        obj[ele] = dict[ele];
        break;
      case `WEST`:
        obj[ele] = dict[ele];
        break;
      default:
        console.log(`Fallthrough`);
    }
  }

  return obj;
}

console.log(
  dirReduc([`NORTH`, `SOUTH`, `SOUTH`, `EAST`, `WEST`, `NORTH`, `WEST`])
);
