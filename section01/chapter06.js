// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 자동으로 형 변환을 수행하는 것
let num = 10;
let str = "20";

let result = num + str; // "1020" (문자열로 변환되어 덧셈이 아닌 문자열 결합이 이루어짐)
console.log(result); // "1020"

// 2. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해 직접 형 변환을 명시
//문자열 -> 숫자
let str1 = "10";
let strTonum1 = Number(str1); // 10 (문자열이 숫자로 변환됨)

let str2 = "10개";
let strTonum2 = parseInt(str2); // 10 (문자열에서 숫자로 변환됨)
console.log(strTonum1); // 10
console.log(strTonum2); // 10

// 숫자 -> 문자열
let num1 = 20;
let numTostr1 = String(num1); // "20" (숫자가 문자열로 변환됨)
let numTostr2 = num1.toString();
console.log(numTostr1 + "입니다."); // "20"