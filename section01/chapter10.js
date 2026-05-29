//for (초기값; 조건식; 증감식) {
//    반복 실행할 코드
//}
for (let idx = 0; idx < 10; idx++) {
    if (idx % 2 === 0) {
        continue; // 반복문을 건너뛰고 다음 반복으로 넘어감
    }
    console.log(idx);
    if(idx >=5){
        break;
    }

}

