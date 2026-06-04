// 단락평가
function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");

    return true;
}

console.log(returnFalse() && returnTrue()); // False 함수, True 함수, true

// falsy 와 truthy도 가능

// 단락평가
function returnFalse(){
    console.log("False 함수");
    return undefined;
}

function returnTrue(){
    console.log("True 함수");

    return 10;
}

console.log(returnTrue() || returnFalse()); // False 函数, True 函数, 10

// falsy 와 truthy도 가능


// 단락 평가 활용 사례

function printName(person) {
    // if (!person) {
    //     console.log("person의 값이 없음");
    //     return;
    // }
    const name = person && person.name;
    console.log(name || "이름이 없습니다.");
}

printName(); // person의 값이 없음
printName({name:"임동혁"});  