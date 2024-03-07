import express from "express";
import ejs from "ejs"
let app =  express();
//미들웨어 
//
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/", (request, response, next) =>{
    next(); //밑에 url 없는 함수한테 던짐
})

app.use("/test", (request, response, next) =>{ㅊ
    next(); //밑에 url 없는 함수한테 던짐
})

app.get("/get",(request, response) =>{
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end("get방식 전달");
})

app.get("/data",(request, response) =>{
    let data = {product : "앨범", price : 4000}
    //response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.send(data); //node가 아닌 express 프레임워크를 만든 사람들이 제공
})

app.get("/add",(request, response) =>{
    let x = parseInt(request.query.x);
    let y = parseInt(request.query.y);
    console.log(request.query.x)
    //response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.send({"x" : x, "y" : y, "result" : x + y}); //node가 아닌 express 프레임워크를 만든 사람들이 제공
})

app.get("/add/:x/:y",(request, response) =>{
    let x = parseInt(request.params.x);
    let y = parseInt(request.params.y);
    //response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.send({"x" : x, "y" : y, "result" : x + y}); //node가 아닌 express 프레임워크를 만든 사람들이 제공
})
/**
 * get :header에 모든 정보를
 *      /add?x=4&y=5    ==> query
 *      /add/4/5        ==> params
 * post : header에는 간단한 url 말고는 보이지 않는다.
 *          1. multipart/form-data : 파일 업로드시 form태그의 post+form 태그의 enctype
 *          
 */

app.post("/userinfo",(request, response) =>{
    let username = request.body.name;
    let age = request.body.age;

    response.send({name:username, age:age})
})
app.post("/post",(request, response) =>{
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end("post 전달");
})

app.use((request, response) =>{
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    response.end("<h1>한글도가능</h1>");
})

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000")
})

/**
 * post 방식은 body 부분을 따로 받아서 처리작업을 해야한다
 * bodyParser를 제공해준다. 별도로 설치 후 모든 요청에 바디파서를 통과해야 했음
 *  => 이를 좀더 편하게 express 프레임워크에 bodyPaser가 내장되어 있다  
 * app.use(express.json());
 * app.use(express.urlencoded({extended : false}));
 * 해당 두 구문이 있어야 bodyparser가 동작한다.
 */