// 배열
// 여러개의 값을 순차적으로 담을 수 있는 자료 형

// 1. 배열 생성

let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)

let arrC = [
    1,
    2, 
    3, 
    true, 
    "hello", 
    null, 
    undefined, 
    () => {}, 
    {}, 
    []
]; //배열 리터럴로 초기화

// let item1= arrC[인덱스ㅎ];

let item1= arrC[0]; 
let item2= arrC[1];

arrC[0] = "hello";
console.log(arrC); //["hello", 2, 3, true, "hello", null, undefined, () => {}, {}, []]

