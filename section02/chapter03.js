// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
console.log(one, two); // 1, 2
console.log(one, two, three); // 1,2,3,undefined

// 2. 객체의 구조 분해 할당
let person = {
    name: "임동혁",
    age: 19,
    hobby: "농구",
};

let {
    age: myAge, 
    hobby,
    name,
    extra = "hello"
} = person;
console.log(name, myAge, hobby, extra); // 임동혁 19 농구 hello

const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra)
}

func(person)