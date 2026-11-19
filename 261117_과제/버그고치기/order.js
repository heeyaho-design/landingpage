// =============================================
// 카페 주문 계산기 - 버그 고치기
// 결과는 F12 → Console 탭에서 확인합니다.
// =============================================

// 원래 의도: 메뉴 이름, 가격, 수량을 준비하고 한 줄로 보여 준다.
const menuName = "아메리카노";
const price = 4500;
let count = 3;
console.log(
  "메뉴: " + menuName + " / 가격: " + price + "원 / 수량: " + count + "잔",
);

// 원래 의도: 가격 × 수량으로 주문 합계를 구한다.
let totalPrice = price * count;
console.log("주문 합계: " + totalPrice + "원");

// 원래 의도: 샷 추가 비용 500원을 더해 한 잔 가격을 구한다.
const extraShot = 500;
console.log("샷 추가한 한 잔: " + (price + extraShot) + "원");

// 원래 의도: 주문 합계를 2명이 똑같이 나눠 낸다.
const people = 2;
console.log("2명이 나눠 내면 1인당: " + totalPrice / people + "원");

// 원래 의도: 스탬프 10개마다 쿠폰 1장. 쿠폰 수와 남은 스탬프 수를 구한다.
const savedStamp = 23;
console.log(
  "스탬프 " +
    savedStamp +
    "개 → 쿠폰 " +
    (savedStamp - (savedStamp % 10)) / 10 +
    "장, 남은 스탬프 " +
    (savedStamp % 10) +
    "개",
);

// 원래 의도: 원래 있던 포인트 1000점에 주문 금액의 1%를 더 쌓는다.
let point = 1000;
point += totalPrice / 100;
console.log("적립 후 포인트: " + point + "점");

// 원래 의도: 스탬프를 1개 찍고, 쿠폰을 1장 쓴 뒤 결과를 보여 준다.
let stamp = 9;
let coupon = 1;
stamp++;
coupon--;
console.log("스탬프: " + stamp + "개 / 남은 쿠폰: " + coupon + "장");

// 원래 의도: 여러 가지 비교 결과를 true / false로 보여 준다.
console.log("15000원 이상인가요? " + (totalPrice >= 15000));
console.log("아메리카노 주문인가요? " + (menuName === "아메리카노"));
console.log("주문 수량이 0이 아닌가요? " + (count !== 0));

// 원래 의도: 글자 "3"과 숫자 3을 == 와 === 로 각각 비교해 차이를 본다.
const inputCount = "3";
console.log('"3" == 3 → ' + (inputCount == count));
console.log('"3" === 3 → ' + (inputCount === count));

// 원래 의도: 회원 여부와 쿠폰으로 논리 연산 결과를 보여 준다.
const isMember = true;
console.log("회원이면서 10000원 이상? " + (isMember && totalPrice >= 10000));
console.log("회원이거나 쿠폰이 있나요? " + (isMember || coupon > 0));
console.log("비회원인가요? " + !isMember);

// 원래 의도: 회원이면서 10000원 이상이면 1000원 할인하고, 합계에서 뺀다.
const discount = isMember && totalPrice >= 10000 ? 1000 : 0;
totalPrice = totalPrice - discount;
console.log("할인: " + discount + "원 / 할인 후 금액: " + totalPrice + "원");

// 원래 의도: 15000원 이상이면 배달비 무료, 아니면 3000원. 최종 금액을 보여 준다.
const deliveryFee = totalPrice >= 15000 ? 0 : 3000;
const finalPrice = totalPrice + deliveryFee;
console.log("배달비: " + deliveryFee + "원");
console.log("===== 최종 결제 금액: " + finalPrice + "원 =====");
