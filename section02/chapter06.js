// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}  //인덱스 저장

// 1.2 for of 반복문
for (let item of arr) {
    // console.log(item);
}// 인덱스 저장 안함

// 2. 객체 순회
let person = {
    name: "임동혁",
    age: 19,
    hobby: "농구",
};

// 2.1 Object.keys() : 객체의 키값을 배열로 반환하는 메서드
let keys = Object.keys(person);
for (let key of keys) { // 배열만 가능
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Object.values() : 객체의 값들을 배열로 반환하는 메서드
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
    // console.log(value);
}

// 2.3 for in 반복문 : 객체의 키값을 순회하는 반복문
for (let key in person) { // 
    const value = person[key];
    // console.log(key, value);
}