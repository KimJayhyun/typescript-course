let a: null | string;

// a = 5; // Error: Type '5' is not assignable to type 'null'.
a = null;

let b: undefined | number;

// b = "hello"; // Error: Type '"hello"' is not assignable to type 'undefined | number'.
b = undefined;

// ─── null vs undefined ───────────────────────────────────────────

console.log("=== null vs undefined ===");
console.log(typeof null); // "object" (JS 역사적 버그)
console.log(typeof undefined); // "undefined"

console.log(null == undefined); // true  (느슨한 비교)
console.log(null === undefined); // false (엄격한 비교)

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// ─── ! Non-null Assertion ─────────────────────────────────────────

console.log("\n=== Non-null Assertion (!) ===");

type User = {
  name: string;
  address?: {
    city: string;
  };
};

function getUser(): User | null {
  return { name: "Kim", address: { city: "Seoul" } };
}

const user = getUser();
// user.name;        // ❌ 컴파일 오류: 'user' is possibly 'null'
console.log(user!.name); // ✅ "Kim" — null 아님을 단언
console.log(user!.address!.city); // ✅ "Seoul"

// ─── ?. Optional Chaining ─────────────────────────────────────────

console.log("\n=== Optional Chaining (?.) ===");

const userWithNoAddress: User = { name: "Lee" };

console.log(userWithNoAddress.address?.city); // undefined — 오류 없이 넘어감
console.log(user?.address?.city); // "Seoul"

// ─── ! vs ?. 차이점 ───────────────────────────────────────────────

console.log("\n=== ! vs ?. 차이점 ===");

function printCity(u: User | null) {
  // ?. 사용: null이어도 조용히 undefined 반환
  console.log("?. 결과:", u?.address?.city);

  // ! 사용: null이면 런타임 오류 발생
  // console.log("! 결과:", u!.address!.city); // null 전달 시 TypeError
}

printCity(user); // "Seoul"
printCity(userWithNoAddress); // undefined (address 없음)
printCity(null); // undefined (?. 덕분에 오류 없음)
