type Directions = "NORTH" | "EAST" | "SOUTH" | "WEST";

type DirObj = {
  [key: string]: number;
  NORTH: number;
  EAST: number;
  SOUTH: number;
  WEST: number;
}

export function dirReduc(arr: Directions[]): DirObj {
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
  const obj: DirObj = {
    NORTH,
    EAST,
    SOUTH,
    WEST,
  };

  for (const ele of arr) {
    const upperEle = ele.toUpperCase();

    switch (upperEle) {
      case `NORTH`:
        obj[ele] = dict[ele][0];
        break;
      case `EAST`:
        obj[ele] = dict[ele][0];
        break;
      case `SOUTH`:
        obj[ele] = dict[ele][0];
        break;
      case `WEST`:
        obj[ele] = dict[ele][0];
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
