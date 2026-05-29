function greeting (){
    console.log('안녕하세요!');
}
//함수는 호출했을 때만 실행되는 코드의 묶음입니다.

console.log("호출 전");
greeting();
console.log("호출 후");
// 호이스팅
// ->끌어올리다 라는 뜻
// -> 함수 선언문은 호이스팅이 발생하여 함수가 선언되기 전에 호출할 수 있습니다.
// -> 함수 표현식은 호이스팅이 발생하지 않아 함수가 선언되기 전에 호출할 수 없습니다.


function getArea (width, height){ // function 함수명(매개변수)
    let area = width * height;
    function another(){ //중첩함수 
        cosole.log("another");
    }

    return area; // 함수의 결과값을 반환하는 키워드 
}

let area1 = getArea(10, 20); // 함수명(인수)
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200); // 함수명(인수) 