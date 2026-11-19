console.log("hello world");

let name = "원이";
let age = 22;

// 1. 조건문
// 20살 이상이면 혼자 입장가능
// 아닐경우 보호자 동행
if (age >= 30) {
  console.log("입장가능");
} else {
  console.log("보호자 동행 가능");
}

let discount = 0;
// 8살미만 : 50%, 20미만 : 20%, 65미만 : 0% 65이상 30%
age = 7;
if (age < 8) {
  discount = 50;
} else if (age < 20) {
  discount = 20;
} else if (age < 65) {
  discount = 0;
} else {
  discount = 30;
}
console.log("최종할인률 " + discount);

// 2. 선택문
let price = 0;
let goods = "응원봉";
switch (goods) {
  case "포토카드":
    price = 3000;
    console.log(price);
    break;
  case "앨범":
    price = 15000;
    console.log(price);
    break;
  case "응원봉":
    price = 30000;
    break;
  default:
    price = 0;
}
console.log("최종금액 " + price);

// 3. 반복문
// 굿즈 포장하기
let count = 6;
let packed = 0;
// 포장된 상품수가 구매한 상품수보다 작으면 반복
while (packed <= count) {
  console.log(`포장된 상품 : ${packed}`);
  console.log(`상품개수 : ${count}`);
  packed++;
}

// 짝수번째 굿즈에 포토카드 넣기
let photoCard = 0;
while (photoCard < count) {
  photoCard++;
  //포토카드 개수가 홀수일때 다음 코드를 생략
  if (photoCard % 2 !== 0) {
    continue;
  }
  console.log(`포토카드 ${photoCard}`);
}
