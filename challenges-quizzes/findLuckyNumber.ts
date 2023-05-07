function findLucky(arr: number[]): number {
  return (
    arr
      .reduce((a: number[], x: number) => {
        a[x] = (a[x] || 0) + 1;
        return a;
      }, [])
      .filter((x: number, i: number) => x === i)
      .pop() || -1
  );
}

findLucky([
  19,
  12,
  11,
  14,
  18,
  8,
  6,
  6,
  13,
  9,
  8,
  3,
  10,
  10,
  1,
  10,
  5,
  12,
  13,
  13,
  9,
]);
