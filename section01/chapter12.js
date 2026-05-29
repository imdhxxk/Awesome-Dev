//1. 함수 표현식
function funcA(){
    // console.log('funcA');
}

let varA = funcA; // 함수는 값으로 취급되므로 변수에 할당할 수 있습니다.
varA(); // funcA 함수 자체가 출력됩니다.

let varB = function funcB() {
    // console.log('funcB');
}; // funcA 함수를 호출하여 반환값을 varB에 할당합니다. funcA 함수는 반환값이 없으므로 undefined가 할당됩니다.

varB();
// funcB(); // 변수에서 만들었기 때문에 자체로는 호출 불가.

// 2. 화살표 함수
// let varC = () => {
//     return 1;
// }
//
// 만약에 varC라는 함수가 그냥 값을 반환하기만 하면
// let varC = () => 1; // 이렇게도 표현 가능
// let varC = (value) => value + 1;
let varC = (value) => {
    console.log(value);
    return value + 1;
};


console.log(varC(10)); // 1 