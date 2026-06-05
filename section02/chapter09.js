// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링ㅎ하여 새로운 배열로 반환
let arr1 = [
    {name:"임동혁", hobby : "농구"},
    {name:"강재호", hobby : "축구"},
    {name:"정다운", hobby : "농구"},
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);

// 2.map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열을 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr)=>{
    return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// let arr3 = ["b","a","c"]
// arr3.sort();
let arr3 = [10, 3, 5];
arr3.sort((a,b) => {
    //내림차순
    // if (a>b){
    //     // b가 a앞에 와라
    //     return 1;
    // }else if(a<b){
    //     // a가 b앞에 와라
    //     return -1;
    // }else{
    //     //자리 바꾸지 마라
    //     0;
    // }
    if (a<b){
        // a가 b앞에 와라
        return 1;
    }else if(a>b){
        // b가 a앞에 와라
        return -1;
    }else{
        //자리 바꾸지 마라
        0;
    }
    
});

// console.log(arr3);

// 4. toSorted(가장 최근에 추가된 함수)
//원본배열은 두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted)

// 5. join
// 배열ㄹ의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["h1","im","winterlood"];
const joined = arr6.join(" "); // join("구분자") 
console.log(joined);