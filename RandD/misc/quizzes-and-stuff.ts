type Person = {
  name: string;
  nickname?: string;
};

type Nicknames = Record<string, string>;

const dave: Person = { name: "David" };
const nickNames: Nicknames = { David: "Dave" };

const getNN = (person: Person, nicknames: Nicknames): Person => ({
  ...person,
  nickname: nicknames[person.name],
});

const daveWithNickname = getNN(dave, nickNames);

console.log(daveWithNickname.nickname);


// const steven = { name: "Steven" };
// const dynamicProperty = { David: "Steve" };

// function addPropertyToObject<T extends Record<string, any>>(
//   person: T,
//   propertyName: string,
//   propertyValue: T[string]
// ): T {
//   return {
//     ...person,
//     [propertyName]: propertyValue,
//   };
// }

// const steveWithNewProperty = addPropertyToObject(steven, "nickname", nickNames[steven.name]);

// console.log(steveWithNewProperty.nickname); // "Steve"