// IFFE & Higher Order Function
// Debugger used to follow callstack

((fn, val) => {
  debugger;
  fn(val);
})(console.log, 5);
