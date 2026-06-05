// 원시 타입 vs 객체 타입 
// 객체 타입 : Object -> Array -Function -RefexExp
// 참조값
// 원시 타입 : number, string, boolean, null, undefined, symbol
// 객체 타입은 별로도 저장 공간이 필요하다. 그래서 객체 타입은 참조값을 저장한다.
// 참조값 : 객체가 저장된 메모리 주소값을 의미한다. 
// 객체 타입은 참조값을 통해서 객체에 접근한다. 
// 객체 타입은 참조값이 같으면 같은 객체를 가리킨다.
// 객체타입은 가변값이다.
// 원시 타입은 불변값이다. 
// 원시 타입은 값이 같으면 같은 값을 의미한다.


//객체 타입 주의사항
//  얕은 복사
let o1 = {name: "임동혁"};
let o2 = o1;
//원본 객체가 수정될 수 있어 위험함

// 깊은 복사
let o1 = {name: "임동혁"};
let o2 = {...o1};
//원본 객체가 수정될  일이 없어 안전함

// 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다

let o1 = {name: "임동혁"}; 
let o2 = o1; //o1과 같음
let o3 = {...o1}; //새로운 참조값 생성
console.log(o1 === o2); // true
console.log(o1 === o3); // false

console.log(
    JSON.stringify(o1) === JSON.stringify(o3) // js내장함수 객체를 문자열로 변환하는 기능
) // true

//배열과 함수도 객체이다.