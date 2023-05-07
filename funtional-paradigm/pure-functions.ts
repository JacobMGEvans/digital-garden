// Pure Functions

// f(x) = x + 1
const f = (x: number): number => x + 1;

// IMPURE EXAMPLES
// Ex 1 - Global State
const cartTotal = (quantity: number, costOfItem: number): number => costOfItem * quantity;
// console.log(cartTotal(2, 1));

// Ex2 -> Same input different output
const generateID = (): number => Math.floor(Math.random() * 1000);

// Ex3 -Side Effect
const createFoodItem = (id: number, name: string): { id: number, name: string } => ({
  id,
  name,
});

let itemId = 0;
const createFoodItemWithId = (name: string): { id: number, name: string } => createFoodItem(++itemId, name);

// ex4 Side Effect Outside World
const logger = (msg: string): void => {
  console.log(`Im Impure Function`);
};