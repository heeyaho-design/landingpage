// 1. 내용 출력하기
console.log("첫 내용 출력");
// 2.변수 출력
// 1)바뀌지 않는 값 - 상수
const shopName = "스타벅스";
console.log(shopName);
// 2) 변하는 값 - 변수
let productName = "에어팟";
console.log(productName);

productName = "멕븍";
console.log(productName);
console.log(productName);
console.log(productName);

const gender = "남자";

// 3. 여러 데이터 형태 담기
// 숫자(number)
let price = 39000;
// 논리(boolean)
let shoes = false; //0
let pants = true; // 1
let memo;
console.log(memo);

const name = "정원이";
let age = 22;
let isReader = true;
let cat = null;
let wdding;

// 백텍(`)
let woni = `원이의 이름은 ${name}입니다. 나이는 ${age}살입니다.`;
console.log(woni);
// 2달후...
age = 23;
woni = `원이의 이름은 ${name}입니다. 나이는 ${age}살입니다.`;
console.log(woni);

// 데이터 타입 확인 - 원시타입
// String, number,boolean, null, undefined, Object

console.log(
  typeof name,
  typeof age,
  typeof isReader,
  typeof cat,
  typeof wdding,
);
