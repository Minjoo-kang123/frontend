const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url =  require("url"); // get으로 전달된 문자열을 parsing함 >> json으로 만들어줌
const { query } = require("express");
const server = http.createServer((req, res) => {
    /*
    브라우저에서 서버로 접근하면 해당 함수가 호출됨
    req : request객체 - 브라우저에서 보내는 요청 정보를 담고 있는 객체이다
    res : 서버에서는 response 객체에 정보를 담아 브러우저로 전송한다.
    
    */
   
    console.log(req.method)
    pathname = url.parse(req.url).pathname;
   if(req.method == "GET"){
     let query = url.parse(req.url, true).query; // 넘어온 정보를 json으로 parsing
     if(pathname == "/"){  
          console.log(query);
          console.log(query["age"]);

          res.setHeader('Content-Type', 'text/html');
          res.end(`<h1> name = ${query.name},  age = ${query.age}</h1> `);
     }else if(pathname =="/add"){
          let x = parseInt(query.x)
          let y = parseInt(query.y)
          
          res.setHeader('Content-Type', 'text/html');
          res.end(`<h1> x + y = ${x + y} `); //end 는 뭐지? html에 뿌릴 정보
     }else if(pathname =="/gugu")
          gugu(req,res)
   }else{
        res.setHeader('Content-Type', 'text/html');5
        res.end("<h1>post</h1>");
   }
});


function gugu(req, res){
     let query = url.parse(req.url, true).query;
     let dan = query.dan;

     let str = ""
     for (i = 1; i <=9; i++){
          str += `${dan} * ${i} = ${dan * i}<br/>`
     }
     res.setHeader('Content-Type', 'text/html');
     res.end(str);
}

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})