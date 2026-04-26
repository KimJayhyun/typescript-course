function generateError(msg?: string) {
  throw new Error(msg);
}

generateError("Something went wrong!");
generateError();

type User = {
  name: string;
  age: number;
  role?: "Admin" | "Editor" | "Guest";
};

let input = "";
// nullish 병합 연산자 (??)를 사용하여 input이 null 또는 undefined인 경우 false로 대체
const didProvideInput = input ?? false;
