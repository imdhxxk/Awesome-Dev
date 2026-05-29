//1. 콜백함수
function main(value) {
    value(); // 전달받은 콜백함수를 호출하여 실행합니다. 이때, value는 sub 함수가 됩니다.
}


main(() =>{
    // console.log("i am sub");
}); // main 함수에 sub 함수를 콜백함수로 전달합니다.
//  main 함수는 sub 함수를 호출하여 실행합니다.

//콜백함수 예제
function repeat(count, callback){
    for (let idx = 1 ;idx <=count; idx++){
        callback(idx); // 콜백함수를 호출하여 idx 값을 전달합니다.
    }
}

//비슷함 함수 두개를 만들 때

// function repeatDouble(count){
//     for (let idx = 0 ;idx <=count; idx++){
//         console.log(idx * 2);
//     }
// }

// function repeatTriple(count){
//     for (let idx = 0 ;idx <=count; idx++){
//         console.log(idx * 3);
//     }
// }

repeat(5,(idx) => {
    console.log(idx);
}); 

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});



// repeatDouble(5); 
// repeatTriple(5);