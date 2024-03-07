const http = require("http");
const host = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    /*
    브라우저에서 서버로 접근하면 해당 함수가 호출됨
    req : request객체 - 브라우저에서 보내는 요청 정보를 담고 있는 객체이다
    res : 서버에서는 response 객체에 정보를 담아 브러우저로 전송한다.
    
    */
   console.log(req.method);
   res.statusCode = 200 //접속성공
   res.writeHead(200, {'Content-Type':'text/html'});
   res.end('<h1>Hello World</h1>')
});

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})