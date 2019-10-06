let dave = { name: "David" };
let nickNames = { David: "David" };

const getNN = (person, nickNames) => {
  person.nickname = nickNames[person.name];

  return person;
};
getNN(dave, nickNames);

console.log(dave.nickname);
