const http = require("http");
const host = "127.0.0.1";
const port = 4000;  
const url = require("url");
const fs = require("fs"); //html 파일을 읽어서 ejs엔진을 통해 
//자바스크립트 객체와 html 을 결합해서 새로운 html을 만들어 보내야한다 
//npm install ejs -- 별도의 설치를 해야 한다 
const ejs = require("ejs");
const functionMap=[
    {path:"/add_input", func:add_input},
    {path:"/add_output", func:add_output},
];

let server = http.createServer((req, res)=>{
    console.log(req.method)
    pathname = url.parse(req.url).pathname;

    let idx = functionMap.findIndex(item=> item.path == pathname)   
    if(idx == -1){
        res.writeHead(404, {"Content-Type":"text/html"})
        res.end("<h1> error </h1>")
        return
    }
    functionMap[idx].func(req, res);
} );

server.listen( port, host, ()=>{
    console.log(`Server start at http://${host}:${port}`);
});

function add_input(req, res)
{
    fs.readFile("./html/add_input.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        //data = data.replace("{{title}}", "Hello");
        //ejs엔진이 동적인 웹페이지를 만든다. 
        res.end( data );
    });
}
function add_output(req, res)
{
    fs.readFile("./html/add_output.html", "utf-8", function(error, data){
        if(error)
        {
            console.log( error );
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        let query = url.parse(req.url, true).query; // 넘어온 정보를 json으로 parsing
        x = parseInt(query.x)
        y = parseInt(query.y)
        console.log(query)
        data = ejs.render(data, {x : x, y : y})
        res.end( data );
    });
}