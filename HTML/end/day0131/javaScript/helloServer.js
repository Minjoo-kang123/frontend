let http = require("http");
let server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello World</h1>')
});

/*
    createServer3 함수는 서버 객체를 생성한다
    생성된 객체를 이용해 클라이언트가 접속해 오기를 기다린다
    클라이언트가 접속해오면 createServer함수에서 콜백함수를 호출
*/

server.listen(3000, ()=>{
    console.log("시작 요이땅");
});

//서버가 클리이언트로부터 요청받을 준비를 한다 listen : 대기상태