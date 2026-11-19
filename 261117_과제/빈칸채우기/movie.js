// =============================================
// 3교시 빈칸 채우기: 영화 예매 계산기
//
//
// [완성 모습] Console에 이렇게 나와야 합니다
// 영화: 우주 탐험대 / 어른 2명, 어린이 1명
// 어린이 표 가격: 6000원
// 표 값 합계: 30000원
// 전체 좌석: 100석
// 우리 예매 후 남은 좌석: 60석
// 팝콘 1개 추가 후 합계: 36000원
// 쿠폰 1장 쓰고 남은 쿠폰: 1장
// 사용 가능한 포인트: 3000점
// 어린이도 볼 수 있나요? true
// 우주 탐험대를 예매했나요? true
// 회원 할인 대상인가요? true
// 할인: 2000원 / 최종 결제 금액: 34000원
// =============================================

// [문제 1] 한 번 정하면 바뀌지 않는 값을 만드는 키워드
const movieTitle = "우주 탐험대";
const ticketPrice = 12000;
const popcornPrice = 6000;

// [문제 2] 나중에 값이 바뀔 수 있는 변수를 만드는 키워드
let adult = 2;
let child = 1;

// [문제 3] 콘솔에 내용을 출력하는 메서드 이름
console.log(
  "영화: " + movieTitle + " / 어른 " + adult + "명, 어린이 " + child + "명",
);

// [문제 4] 어린이 표는 어른 표 가격의 절반 (나누기 연산자)
const childPrice = ticketPrice / 2;
console.log("어린이 표 가격: " + childPrice + "원");

// [문제 5] 어른 표 값(가격 × 인원)과 어린이 표 값을 합치기 (빈칸 2개)
let total = ticketPrice * adult + childPrice * child;
console.log("표 값 합계: " + total + "원");

// [문제 6] 상영관은 가로 10칸, 세로 10칸. 10의 제곱으로 전체 좌석 수 구하기 (거듭제곱 연산자)
const allSeats = 10 ** 2;
console.log("전체 좌석: " + allSeats + "석");

// 이미 다른 사람이 예매한 좌석은 37석
let leftSeats = allSeats - 37;
// [문제 7] 우리 가족 인원만큼 남은 좌석에서 빼서 다시 넣기 (복합 대입 연산자)
leftSeats -= adult + child;
console.log("우리 예매 후 남은 좌석: " + leftSeats + "석");

let popcorn = 0;
// [문제 8] 팝콘 개수를 1 늘리기
popcorn++;
// [문제 9] 팝콘 값을 합계에 더해서 다시 넣기 (복합 대입 연산자)
total += popcornPrice * popcorn;
console.log("팝콘 " + popcorn + "개 추가 후 합계: " + total + "원");

let coupon = 2;
// [문제 10] 쿠폰 개수를 1 줄이기
coupon--;
console.log("쿠폰 1장 쓰고 남은 쿠폰: " + coupon + "장");

// 포인트는 1000점 단위로만 쓸 수 있어요
const point = 3750;
// [문제 11] 1000으로 나눈 나머지를 구하는 연산자
const usablePoint = point - (point % 1000);
console.log("사용 가능한 포인트: " + usablePoint + "점");

// 이 영화는 12세 이상 관람가
const childAge = 13;
// [문제 12] 12 이상인지 비교하는 연산자
console.log("어린이도 볼 수 있나요? " + (childAge >= 12));

// [문제 13] 값과 자료형까지 같은지 비교하는 연산자
console.log("우주 탐험대를 예매했나요? " + (movieTitle === "우주 탐험대"));

// 회원이면서, 조조(아침) 상영이 아니면 회원 할인을 받을 수 있어요
const isMember = true;
const isMorning = false;
// [문제 14] '그리고' 연산자와 '아니다' 연산자 (빈칸 2개)
const canDiscount = isMember && !isMorning;
console.log("회원 할인 대상인가요? " + canDiscount);

// [문제 15] 삼항 연산자: 할인 대상이면 2000원, 아니면 0원 (빈칸 2개)
const discount = canDiscount ? 2000 : 0;
console.log(
  "할인: " + discount + "원 / 최종 결제 금액: " + (total - discount) + "원",
);
