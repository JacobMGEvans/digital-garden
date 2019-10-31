// pointfree programming

const array = [1, 2, 3];

//  x is an interim variable
array.map(x => x * 2);

/**
 * @function double example of pointfree programming
 * @param {Number} argument to be doubled
 */
const double = x => x * 2;
array.map(double);

// legibility
// reduce surface area for bugs
// unit test our named functions
