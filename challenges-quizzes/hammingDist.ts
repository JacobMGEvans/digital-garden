let hammingDistance = (x: number, y: number) =>
  console.log((x ^ y).toString(2).replace(/0/g, ``).length);
hammingDistance(1, 2);
