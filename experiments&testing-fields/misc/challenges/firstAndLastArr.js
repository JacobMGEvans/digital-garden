const arrNames = [`Picard`, `Worf`, `Data`, `LaForge`];

// const lastNum = arrNames.length - 1;

const { length, 0: first, [length - 1]: last } = arrNames;

console.log(length, first, last); // 4 'Picard' 'LaForge'
