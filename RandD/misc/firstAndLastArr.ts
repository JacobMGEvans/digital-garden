const arrNames: string[] = [`Picard`, `Worf`, `Data`, `LaForge`];

//@ts-expect-error - hacking the Array, so ignore TS's better judgement
const { length, 0: first, [length - 1]: last } = arrNames;

console.log(length, first, last); // 4 'Picard' 'LaForge'
