const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url =  require("url"); // get으로 전달된 문자열을 parsing함 >> json으로 만들어줌
const server = http.createServer((req, res) => {
    /*
    브라우저에서 서버로 접근하면 해당 함수가 호출됨
    req : request객체 - 브라우저에서 보내는 요청 정보를 담고 있는 객체이다
    res : 서버에서는 response 객체에 정보를 담아 브러우저로 전송한다.
    
    */
   
    console.log(req.method)
    pathname = url.parse(req.url).pathname;
   if(req.method == "GET" && pathname == "/"){
        let query = url.parse(req.url, true).query; // 넘어온 정보를 json으로 parsing

        console.log(query);
        console.log(query["age"]);

        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1> name = ${query.name},  age = ${query.age}</h1> `);
   }else{
        res.setHeader('Content-Type', 'text/html');5
        res.end("<h1>post</h1>");
   }
});

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})