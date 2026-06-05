// Promise 비동기 작업들을 실행, 비동기 작업 상태 관리, 작업 결과 저장, 병렬 실행, 다시 실행, 기타 등등
// 실행, 상태관리, 작업 결과
// pending : 대기상태는 아직 작업이 완료되지 않은 상태
// 중간 resolve
// fulfiled : 비동기 작업이 성공적으로 마무리 된 상태
// 중간 reject
// rejected : 비동기 작업이 실패한 상태
function add10(num){
    
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 
    // executor

    setTimeout(() => {
        if(typeof num === 'number'){
            resolve(num + 10);
        } else{
            reject("num이 숫자가 아닙니다.")
        }
    }, 2000);
});
//then 메서드
// -> 그 후에
// 프로미스 체이닝
promise.then((value)=>{
    console.log(value);
}).catch((error) => {
    console.log(error);
});

// promise.catch((error) => {
//     console.log(error);
// });

// setTimeout(() => {
//     console.log(promise);
// },3000);

// console.log(promise);
return promise;
}


add10(0).then((result)=> {
    console.log(result);
    return add10(result);
}).then((result) => {
        console.log(result);
        return add10(result)
}).then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error)
})