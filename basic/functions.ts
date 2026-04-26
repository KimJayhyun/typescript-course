function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

// never completes successfully, always throws an error
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string): void => {
  console.log(msg);
};

function performJob(cb: (m: string) => void): void {
  // ... some code
  cb("Job completed");
}

performJob(logMsg);

type Greeter = {
  name: string;
  age: number;
  greet: () => void;
};

let user: Greeter = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};
