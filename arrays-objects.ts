let hobbies = ["Sports", "Cooking"];

// Argument of type 'number' is not assignable to parameter of type 'string'.
// hobbies.push(10);

let users: (string | number)[];
users = ["Max", "Anna", 3];

let newUsers: Array<string | number>;
users = ["Max", "Anna", 3];

let possibleResults: [number, number];
possibleResults = [1, -1];
// Error: Type '[number, number, number]' is not assignable to type '[number, number]'.
// possibleResults = [1, -1, 2];

let man: {
  name: string;
  age: number;
} = {
  name: "Max",
  age: 30,
};

let val: {} = false;
// const someObj = {}; // null, undefined => error

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: "2",
};
