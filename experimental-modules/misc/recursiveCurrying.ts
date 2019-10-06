const curry = (fn: any) => {
  return function curried(...args) {
    const done: boolean = args.length >= fn.length;
    if (done) {
      return fn.apply(this, args);
    } else {
      return (...args2: any) => curried.apply(this, [...args, ...args2]);
    }
  };
};
