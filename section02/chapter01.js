// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInt

// 2. Truthy한 값
// -> 7가지 falsy 한 값들을 제외한 나머지 모든 값

let t1 = "hello"; //문자열
let t2 = 123; // 숫자 (0과 -0을 제외한 모든 숫자)
let t3 = []; // 빈 배열 (배열은 객체이므로 truthy)
let t4 = {}; // 빈 객체 (객체는 truthy)
let t5 = () => {}; // 빈 함수 (함수는 객체이므로 truthy)


//3. 활용 사례
function printName(person) {
    if(!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name : "임동혁"};
printName(person); 