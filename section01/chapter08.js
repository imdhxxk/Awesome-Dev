//1. null 병합 연산자
// -> 존재하는 값을 추려내느 기능
// -> null,  undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

let userName="임동혁";
let userNickName="동혁";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2.typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기느을 하는 연산자
let var7 = 1;
var7 = "hello";
var7 = true; 
let t1 = typeof var7; // string

//3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
let num1 = 10;
let result = num1 > 5 ? "num1이 5보다 크다" : "num1이 5보다 작거나 같다";