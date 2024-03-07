const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url =  require("url"); // get으로 전달된 문자열을 parsing함 >> json으로 만들어줌
const ejs = require("ejs");

const server = http.createServer((req, res) => {
    fs.readFile("./html/index.html", "utf8", function (err, data){
        if(err){
            console.log(err);
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>hello</h1>");
            return;
        }
        data = ejs.render(data , { title : "yejuns"})
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
        
    })
     
 });
 server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`)
})