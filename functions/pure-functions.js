// Pure Functions

// f(x) = x + 1
const f = x => x + 1;

// IMPURE EXAMPLES
// Ex 1 - Global State
const COST_OF_ITEM = 1;
const cartTotal = quantity => COST_OF_ITEM * quantity;
// console.log(cartTotal(2));
// Ex2 -> Same input different output
const generateID = () => Math.floor(Math.random() * 1000);

// Ex3 -Side Effect
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name,
});
// ex4 Side Effect Outside World
const logger = msg => {
  console.log(`Im Impure Function`);
};
