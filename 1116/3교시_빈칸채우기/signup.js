/*
  3교시 빈칸 채우기 : 회원가입 정보 정리
  [진행 방법]
  1) index.html, style.css, signup.js 세 파일이 같은 폴더에 있어야 합니다. signup.js만 고칩니다.
  2) ___ 자리를 [문제 1]부터 번호 순서대로 채웁니다. 바로 위 주석이 무엇을 채울지 알려 줍니다.
  3) index.html을 브라우저로 열고 F12 → Console 탭을 봅니다. 저장할 때마다 새로고침(F5)합니다.
  4) 빈칸이 하나라도 남아 있으면 콘솔에 빨간 오류(SyntaxError 등)가 뜨고 아무것도 출력되지 않습니다.
     오류 오른쪽의 signup.js:줄번호 를 누르면 아직 못 채운 곳으로 이동합니다.
  [완성 모습] 15문제를 모두 맞게 채우면 콘솔에 아래 11줄이 차례로 나옵니다.
     하루클래스 김하늘
     string
     true false
     null
     25 number
     3 172.5
     1024 string
     false
     true string
     김하늘님, 하루클래스에 오신 것을 환영합니다
     회원번호: 1024
*/

// 회원 기본 정보
// [문제 1] 바뀌지 않는 값(사이트 이름)을 만드는 선언 키워드
const siteName = "하루클래스";
// [문제 2] 바뀔 수 있는 값(회원 이름)을 만드는 선언 키워드
let userName = "김하늘";
// [문제 3] 콘솔에 값을 출력하는 메서드 이름
console.log(siteName, userName);
// [문제 4] 값의 자료형을 알려 주는 키워드 (출력: string)
console.log(typeof userName);

// 동의 항목과 추천인
// [문제 5] 약관에 동의했다 = 참을 뜻하는 불리언 값
let agreeTerms = true;
// [문제 6] 마케팅 수신은 동의하지 않았다 = 거짓을 뜻하는 불리언 값
let agreeMarketing = false;
console.log(agreeTerms, agreeMarketing);
// [문제 7] 추천인이 없어서 "일부러 비워 둔다"는 뜻의 값
let recommender = null;
console.log(recommender);

// 입력창에서 받은 값 (모두 문자열)
let ageText = "25";
let levelText = "3단계";
let heightText = "172.5cm";
let memberNumber = 1024;

// [문제 8] 문자열 "25"를 숫자로 바꾸는 함수
let age = Number(ageText);
console.log(age, typeof age);
// [문제 9] "3단계"에서 정수 3만 꺼내는 함수
let level = parseInt(levelText);
// [문제 10] "172.5cm"에서 소수점까지 172.5를 꺼내는 함수
let height = parseFloat(heightText);
console.log(level, height);
// [문제 11] 바뀔 수 있는 변수 선언 키워드, 그리고 숫자를 문자열로 바꾸는 함수 (한 줄에 빈칸 두 개)
let memberCode = String(memberNumber);
console.log(memberCode, typeof memberCode);
// [문제 12] 빈 문자열("")을 참/거짓 값으로 바꾸는 함수 (출력: false)
let hasPhoto = Boolean("");
console.log(hasPhoto);
// [문제 13] 불리언 true를 문자열 "true"로 바꾸는 함수
let agreeText = String(agreeTerms);
console.log(agreeText, typeof agreeText);

// 환영 문구
// [문제 14] 템플릿 리터럴을 감싸는 기호 (앞뒤 두 곳 모두)
console.log(`${userName}님, ${siteName}에 오신 것을 환영합니다`);
// [문제 15] 템플릿 리터럴 안에서 변수를 넣기 시작하는 기호 (닫는 } 는 적혀 있음)
console.log(`회원번호: ${memberCode}`);
