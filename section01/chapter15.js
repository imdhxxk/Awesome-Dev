// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 대부분 사용

// 2. 객체 프로퍼티 (객체 속성 key(문자나 숫자를 키로 사용 문자열 중 띄어쓰기를 뜰 때는 따옴표로 감싸기) : value 형식 )
let person = { 
    name: "임동혁",
    age:19,
    hobby: "농구",
    job : "Fe Developer",
    extra : {}
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 관호 표기법)
// 간결함
let name = person.name;
// let name = person.name2; // 존재하지 않는 프로퍼티에 접근하면 undefined 반환
// 동적으로 가져와야할 땐 괄호 표기법 사용
let age = person["age"]; // 점 표기법으로 접근할 수 없는 경우 관호 표기법 사용 쌍따옴표로 키를 감싸야됨

let property = "hobby"; 
let hobby = person[property]; // 변수로 접근 가능
console.log(hobby);

// 3.2 프로퍼티 추가
person.job = "fe developer"; // 프로퍼티 수정
person["faveraite food"] = "햄버거"; // 프로퍼티 추가 띄어쓰기 있는 키는 관호 표기법으로 접근

// 3.3 프로퍼티 수정
person.jop = "educator";
person["favorite food"] = "피자";

// 3.4 프로퍼티 삭제
delete person.job; // 프로퍼티 삭제
delete person["favorite food"]; // 프로퍼티 삭제

// 3.5 프로퍼티 존재 여부 확인
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false


