// ============================================
// 1. 스코프 (Scope)
// ============================================
function scopeExample(): void {
  console.log("=== 1. 스코프 ===");

  if (true) {
    var varVariable = "var: 함수 스코프";
    let letVariable = "let: 블록 스코프";
    console.log(letVariable); // 블록 안에서는 접근 가능
  }

  console.log(varVariable); // ✅ "var: 함수 스코프"
  // console.log(letVariable); // ❌ TSC 에러: Cannot find name 'letVariable'
}

// ============================================
// 2. 호이스팅 (Hoisting)
// ============================================
function hoistingExample(): void {
  console.log("\n=== 2. 호이스팅 ===");

  // var는 선언 전에 접근해도 undefined 반환 (JS 런타임 동작)
  // TSC는 이를 경고하지만, 실제 JS에서는 undefined가 출력됨
  var hoistedVar: any;
  console.log(hoistedVar); // undefined
  hoistedVar = "나중에 할당됨";
  console.log(hoistedVar); // "나중에 할당됨"

  // let은 TDZ(Temporal Dead Zone)로 인해 선언 전 접근 시 에러
  // console.log(hoistedLet); // ❌ TSC 에러: Block-scoped variable used before its declaration
  let hoistedLet = "블록 스코프 변수";
  console.log(hoistedLet);
}

// ============================================
// 3. 재선언 (Re-declaration)
// ============================================
function redeclarationExample(): void {
  console.log("\n=== 3. 재선언 ===");

  var duplicateVar = "첫 번째";
  var duplicateVar = "두 번째"; // ✅ var는 재선언 허용
  console.log(duplicateVar); // "두 번째"

  let uniqueLet = "첫 번째";
  // let uniqueLet = "두 번째"; // ❌ TSC 에러: Cannot redeclare block-scoped variable
  uniqueLet = "두 번째 (재할당은 가능)"; // ✅ 재할당은 OK
  console.log(uniqueLet);
}

// ============================================
// 4. 루프에서의 동작 차이 (클로저)
// ============================================
function loopExample(): void {
  console.log("\n=== 4. 루프에서의 클로저 ===");

  // var: 루프가 끝난 후 i는 마지막 값(3)을 참조
  const varFunctions: (() => void)[] = [];
  for (var i = 0; i < 3; i++) {
    varFunctions.push(() => console.log("var i:", i));
  }
  varFunctions.forEach((fn) => fn()); // 3, 3, 3 출력

  // let: 각 반복마다 새로운 스코프 생성
  const letFunctions: (() => void)[] = [];
  for (let j = 0; j < 3; j++) {
    letFunctions.push(() => console.log("let j:", j));
  }
  letFunctions.forEach((fn) => fn()); // 0, 1, 2 출력
}

// ============================================
// 실행
// ============================================
scopeExample();
hoistingExample();
redeclarationExample();
loopExample();
