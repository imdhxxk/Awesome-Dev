let num = 10;

if (num >= 10 ){
    console.log("num은 10보다 크거나 같다");
    console.log("조건은 참 입니다.");
} else if(num >= 5){
    console.log("num은 5보다 크거나 같다");
}else if(num >= 3){

}else {
    console.log("조건식은 거짓입니다.")
}

// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수이 조건을 처리할 때 if보다 더 직관적
let animal ="cat";
switch (animal) {
    case "cat":
        console.log("고양이입니다.");
        break;
    case "dog":
        console.log("강아지입니다.");
        break;
    case "snake":
        console.log("뱀입니다.");
        break;
    case "tiger":
        console.log("호랑이입니다.");
        break;
    default:{
        console.log("그런 동물은 전 모릅니다");
    }
}