// =====================================================
// 🐞 버그 고치기 - 💜 리센느 굿즈샵 키오스크
// 실행: 터미널에서  node 3교시_버그고치기.js
// 이 파일에는 버그 6개가 숨어 있어요. 모두 오늘 배운 if, switch, while 을 잘못 쓴 버그예요.
// 주석(// 로 시작하는 설명)은 모두 맞아요. 주석이 말하는 '원래 의도'와 다르게 동작하는 곳을 고치세요.
// 고친 뒤 다시 실행해서 결과가 아래 [목표 결과]와 똑같은지 비교하세요.
//
// [목표 결과]
//   === 💜 리센느 굿즈샵 ===
//   손님: 김민지 (15살), 최애: 원이
//   주문: 앨범 3개
//   미성년 손님은 팬콘서트에 보호자와 함께 입장해요.
//   나이 할인: 20%
//   앨범 1개: 15000원
//   추가 할인 없음
//   야호~! 오늘은 포스터 무료 증정 날!
//   팬사인회 응모권은 응원봉 구매 고객만 받아요.
//   결제 금액: 36000원 → 결제 완료
//   1번째 앨범 포장 완료
//   2번째 앨범 포장 완료
//   3번째 앨범 포장 완료
//   2번째 앨범에 원이 포토카드 추가
//   쿠폰 1장, 남은 스탬프 0개
//   추가 구매는 최대 3개까지예요.
//   추가 3개 구매, 남은 돈 19000원
//   === 리센느를 응원해 주셔서 감사합니다! 💜 ===
// =====================================================

let name = "김민지";
let age = 15;
let isMember = true;
let favorite = "원이";
let goods = "앨범";
let count = 3;
let money = 100000;
let stamp = 7;
let isComebackWeek = false;
let isGeojeDay = true;

console.log("=== 💜 리센느 굿즈샵 ===");
console.log(`손님: ${name} (${age}살), 최애: ${favorite}`);
console.log(`주문: ${goods} ${count}개`);

// 20살 이상이면 혼자 입장, 아니면 보호자 동행 안내를 보여 줍니다.
if (age >= 20) {
  console.log("팬콘서트 혼자 입장 가능!");
} else {
  console.log("미성년 손님은 팬콘서트에 보호자와 함께 입장해요.");
}

// 8살 미만 50%, 20살 미만 20%, 65살 미만 0%, 65살 이상 30% 할인합니다.
let discount = 0;
if (age < 8) {
  discount = 50;
} else if (age < 20) {
  discount = 20;
} else if (age < 65) {
  discount = 0;
} else {
  discount = 30;
}
console.log(`나이 할인: ${discount}%`);

// 포토카드 3000원, 앨범 15000원, 응원봉 45000원. 없는 굿즈면 안내합니다.
let price = 0;
switch (goods) {
  case "포토카드":
    price = 3000;
    break;
  case "앨범":
    price = 15000;
    break;
  case "응원봉":
    price = 45000;
    break;
  default:
    console.log("없는 굿즈입니다.");
}
console.log(`${goods} 1개: ${price}원`);

// 리마인 회원이면서 4개 이상 사면 10% 추가 할인합니다.
if (isMember && count >= 4) {
  discount = discount + 10;
  console.log("리마인 회원 4개 이상 구매: 10% 추가 할인!");
} else {
  console.log("추가 할인 없음");
}
// 회원이 아니면 팬클럽 가입을 권합니다.
if (!isMember) {
  console.log("리마인에 가입하면 스탬프를 모을 수 있어요.");
}

// 컴백 주간이거나 '거제 야호 데이'면 포스터를 무료로 드립니다.
if (isComebackWeek || isGeojeDay) {
  console.log("야호~! 오늘은 포스터 무료 증정 날!");
}

// 응원봉을 산 손님에게만 팬사인회 응모권을 드립니다.
if (goods === "응원봉") {
  console.log("응원봉 구매 고객 팬사인회 응모권 증정!");
} else {
  console.log("팬사인회 응모권은 응원봉 구매 고객만 받아요.");
}

// 가진 돈이 결제 금액보다 많거나 같으면 결제 완료, 아니면 잔액 부족입니다.
let total = (price * count * (100 - discount)) / 100;
let result = "";
if (money >= total) {
  result = "결제 완료";
} else {
  result = "잔액 부족";
}
console.log(`결제 금액: ${total}원 → ${result}`);

// 산 개수만큼 하나씩 포장합니다. 하나 포장할 때마다 번호를 1씩 늘려요.
let packed = 1;
while (packed <= count) {
  console.log(`${packed}번째 ${goods} 포장 완료`);
  packed++;
}

// 홀수 번째는 건너뛰고, 짝수 번째에만 최애 멤버 포토카드를 넣습니다.
// 번호를 먼저 늘려 두어야 건너뛸 때도 다음 굿즈로 넘어가요.
let item = 0;
while (item < count) {
  item++;
  if (item % 2 !== 0) {
    continue;
  }
  console.log(`${item}번째 ${goods}에 ${favorite} 포토카드 추가`);
}

// 굿즈 1개에 스탬프 1개. 스탬프가 10개 이상이면 10개를 쿠폰 1장으로 바꿉니다.
stamp = stamp + count;
let coupon = 0;
while (stamp >= 10) {
  stamp = stamp - 10;
  coupon = coupon + 1;
}
console.log(`쿠폰 ${coupon}장, 남은 스탬프 ${stamp}개`);

// 남은 돈으로 같은 굿즈를 더 살 수 있을 만큼 사되, 한 번에 최대 3개까지만 삽니다.
let left = money - total;
let extra = 0;
while (left >= price) {
  left = left - price;
  extra = extra + 1;
  if (extra === 3) {
    console.log("추가 구매는 최대 3개까지예요.");
    break;
  }
}
console.log(`추가 ${extra}개 구매, 남은 돈 ${left}원`);
console.log("=== 리센느를 응원해 주셔서 감사합니다! 💜 ===");
