// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function(item, idx, arr) {
    // console.log(idx, item * 2)
});

let doubledArr = [];
arr1.forEach((item)=>{
    doubledArr.push(item * 2);
});

// console.log(doubledArr); // [2, 4, 6]

// 2.includes
// 배열이 특정 요소를 포함하고 있는지 여부를 반환하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(10);

// console.log(isIncludes); // false

// 3.indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);
console.log(index); // -1

// 4.findIndex
// 모든 요소를 수노히하며넛, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//      if(item === 2) return true;
//     }); // 1
// console.log(findedIndex); // 1

// let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//      if(item % 2 !== 0) return true;
//     }); // 1
// console.log(findedIndex); // 0

// let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0); // 1

// console.log(findedIndex); 

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
    (item) => item === 999
); // -1
console.log(findedIndex);

let objectArr = [
    {name: "임동혁"},
    {name: "김바린"}
];

console.log(
    objectArr.indexOf({name: "임동혁"}) // 얕은 비교여서  못 찾음
);

console.log(
objectArr.findIndex(
    (item) => item.name === "임동혁" // 깊은 비교여서 찾음
) // 0
)
//단순한 원시타입을 찾을 때는 indexOf, 객체나 배열같은 참조타입을 찾을 때는 findIndex를 사용하면 된다.

// 5. find
// 모든 요소를 손회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 =[
    {name: "임동혁"},
    {name: "김바린"}
];

const finded = arr5.find(
    (item) => item.name ==="임동혁"
);
console.log(finded)