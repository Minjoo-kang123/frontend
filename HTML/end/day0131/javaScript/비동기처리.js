/*
    비동기처리.js
    require 구문 -> 자바는 모듈을 불러오는게 아님
                    자바는 이미 모듈이 메모리에 로딩괴어 있음
    
    java.lang.String을 쓰는 것이 옳으나 String만 적어도 import된 파일에서 찾아 적용해준다.
    노드나 파이썬에서의 import 모듈을 통해 메모리로 가져온다.
*/

let fs = require("fs");

fs.readFile("\day0131/javaScript/멀티스레드.txt", "utf-8", function(error, data){
    console.log(data);
})

console.log("완료");