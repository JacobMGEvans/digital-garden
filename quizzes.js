const petsAnimals = [`dog`, `cat`, `parrot`, `mouse`];

const zooAnimals = [`wolf`, `lions`, `eagle`, `shark`];

function switchAnimals(arr1, arr2) {
  const [dog, cat, ...restPets] = arr1;
  const [wolf, lions, ...restZoo] = arr2;
}

console.log(switchAnimals(petsAnimals, zooAnimals));
