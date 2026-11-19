console.log("hello world");

// 1. 산술 연산자
/**
 * 1) +
 * 2) -
 * 3) *
 * 4) /
 * 5) %(나머지)
 */
const menuName = "아메리카노";
const price = 4500;
let count = 3;
console.log("메뉴 : " + menuName + "입니다");
console.log("가격 : " + price + " 수량 : " + count + "잔");

const saveStamp = 23;
const people = 2;
console.log("각 쿠폰수 " + saveStamp / people);
console.log("남은쿠폰수 " + (saveStamp % people));

//2. 대입 연산자
let point = 1000;
let totalPrice = price * count;
// 포인트를 금액의 1%만큼 쌓기
point += totalPrice / 100;
console.log(point);

// 3. 증감 연산자
let stamp = 9;
let coupon = 1;
stamp++;
coupon--;
console.log(stamp, coupon);

let person = 2;
let person2 = 3;
person2 = ++person; // 결과
console.log(person2, person);

// 4. 비교 연산자 - true, false
console.log("총가격이 15000원 이상인가요?" + (totalPrice >= 15000));
console.log("아메리카노인가요?" + (menuName === "아메리카노"));

//5. 논리 연산자
const isMember = false;
let discount = 0;
// 멤버이면서 만원이상 구매했을 때
discount = isMember && totalPrice >= 10000;
console.log(discount);
// 멤버이거나 쿠폰이 있으면 할인가능
discount = isMember || coupon > 0;

// 삼항 연산자
// 배달비 부과
// 10000원 이상이면 배달비 무료, 아니면 3000원 부과
const fee = totalPrice >= 20000 ? 0 : 3000;
console.log(fee);
totalPrice += fee;
console.log(totalPrice);
