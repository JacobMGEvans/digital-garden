function findLucky(arr) {
  const dedup = new Set(arr);
  const str = arr.join(``);

  dedup.forEach((ele) => console.log(str.match(ele)));
}

findLucky([2, 2, 3, 4]);
