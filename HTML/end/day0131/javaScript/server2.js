const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");

const server = http.createServer((req, res) => {
    /*
    브라우저에서 서버로 접근하면 해당 함수가 호출됨
    req : request객체 - 브라우저에서 보내는 요청 정보를 담고 있는 객체이다
    res : 서버에서는 response 객체에 정보를 담아 브러우저로 전송한다.
    
    */
   
    console.log(req.method)
   if(req.method == "GET"){
        fs.readFile("./day0131/javaScript/html/input.html", 'utf-8', (err, data)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'text/html');
            console.log(data)
            res.end(data);
        });
   }else{
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>post</h1>");
   }
});

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})