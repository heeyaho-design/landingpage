/*
  3교시 버그 고치기 : 하루마켓 상품 정보 정리
  이 파일에는 버그가 6개 숨어 있습니다. 이 파일(script.js)만 고치세요.
  주석(원래 의도)은 모두 맞습니다. 코드가 주석과 다르게 되어 있는 곳을 찾으세요.
  결과 확인 : index.html 열기 → F12 → Console 탭 → 목표화면.png와 비교
*/

// 원래 의도: 정리 시작 문구를 출력한다.
console.log("🛒 상품 정보 정리를 시작합니다");

// 원래 의도: 바뀌지 않는 가게 이름을 만들고 출력한다.
const shopName = "하루마켓";
console.log(shopName);

// 원래 의도: 상품 이름을 담아 출력한 뒤, 같은 변수에 새 이름을 넣고 다시 출력한다.
let productName = "무선 이어폰";
console.log(productName);
productName = "무선 이어폰 프로";
console.log(productName);

// 원래 의도: 가격은 숫자, 새 상품 여부는 불리언 true, 메모는 아직 비어 있고, 쿠폰은 일부러 비워 둔다.
let price = 39000;
let isNew = true;
let memo;
let coupon = null;
console.log(price, isNew, memo, coupon);

// 원래 의도: 네 변수의 자료형을 확인한다.
console.log(typeof productName, typeof price, typeof isNew, typeof memo);

// 원래 의도: 가게 이름과 상품 이름을 넣은 문장을 출력한다.
console.log(`${shopName}의 ${productName}`);

// 원래 의도: 입력창에서 온 재고 값은 문자열이다.
let stockText = "12";
console.log(stockText, typeof stockText);

// 원래 의도: 재고 문자열을 숫자로 바꾸고, 바꾼 값과 그 자료형을 출력한다.
let stock = Number(stockText);
console.log(stock, typeof stock);

// 원래 의도: 리뷰 수는 정수로, 평점은 소수점까지 꺼낸다.
let reviewText = "128개";
let ratingText = "4.7점";
let reviewCount = parseInt(reviewText);
let rating = parseFloat(ratingText);
console.log(reviewCount, rating);

// 원래 의도: 숫자로 바꿀 수 없는 글자를 Number()에 넣으면 어떻게 되는지 본다.
let wrongPrice = Number("삼만구천원");
console.log(wrongPrice, typeof wrongPrice);

// 원래 의도: 상품 코드 숫자를 문자열로 바꾼다.
let productCode = String(20261113);
console.log(productCode, typeof productCode);

// 원래 의도: 품절 표시가 있을 때를 먼저 확인하고, 재입고되어 품절 표시를 지운 다음 품절 여부를 다시 정한다.
let soldOutText = "품절";
console.log(Boolean(soldOutText));
let isSoldOut = Boolean(soldOutText);
soldOutText = "";
isSoldOut = Boolean(soldOutText);
console.log(isSoldOut);

// 원래 의도: 정리한 상품 정보를 한 줄로 출력한다.
console.log(
  `상품: ${productName} / 재고: ${stock}개 / 평점: ${rating} / 품절: ${isSoldOut}`,
);
