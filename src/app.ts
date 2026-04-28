const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const personHobbies = ["Hiking", ...hobbies];

const person = {
  name: "Max",
  age: 30,
};

// hard copy of the person object
const copiedPerson = { ...person };
