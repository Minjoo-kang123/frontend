//동기모드 > A, B, C가 있으면 A,B,C 모두 각 업무의 순서대로 시작, 그리고 끝이 난 뒤 다음 Task를 실행한다.
/*
비동기 모드:
    A를 시작하고 업무가 끝나지 않아도 함수를 바로 리턴
    B를 시작하고 업무가 끝나지 않아도 함수를 바로 리턴
    C를 시작하고 업무가 끝나지 않아도 함수를 바로 리턴

    시스템이백드라운드에서 나머지 일을 끝낸다. 
    작업이 완료된을 알리는 것은 콜백함수이다.
    완료된 일의 결과도 콜백함수로 알려줌

    let result = callFunction(); // 결과가 반환값으로 전달된다.

    비동기 모드
    callFunction(callbackFunc(){
        여기서 일의 완료를 알림
        나머지 Task를 처리함
    })
*/

let fs = require("fs")

let result = fs.readFileSync("boot.html", "utf-8");
console.log(result)
console.log("endgind.....")