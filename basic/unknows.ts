// unknown 타입은 모든 값을 허용하지만, 어떤 작업을 수행하기 전에 타입 검사를 해야 합니다.
function process(value: unknown) {
  if (typeof value === "string" && !!value && value.length > 0) {
    console.log("String value:", value);
  }
}
