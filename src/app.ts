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

// =========== //
// Rest Parameters //

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 15, -15, -10);
