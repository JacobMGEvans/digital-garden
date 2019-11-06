function factorial(n) {
  if (n !== 1000) {
    console.log(factorial(n + 1) * n);
    return factorial(n + 1) * n;
  }
  return 1;
}
console.log(factorial(4));
