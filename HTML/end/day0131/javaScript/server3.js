const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url =  require("url"); // get으로 전달된 문자열을 parsing함 >> json으로 만들어줌
const { query } = require("express");
const server = http.createServer((req, res) => {
   if(req.method == "POST"){
          callProcess(req, res)
   }else{
        res.setHeader('Content-Type', 'text/html');5
        res.end("<h1>post</h1>");
   }
});


server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})

function callProcess(req,res){
     let body = "";
    req.on('data', (data)=>{
        body+=data;
    })
    req.on('end', ()=>{
        var data = new URLSearchParams(body.toString());
        //json구조 아님
        console.log( data);
        console.log("name " + data.get("name"));
        console.log("age " + data.get("age"));
        res.writeHead(200, {'Content-Type':'text/html'});
        var result = '<h1>이름 : '+data.get("name")+'</h1>';
        result += '<h1>나이 : '+data.get("age")+'</h1>';
        res.end(result);
    });
}