import http from 'http';
import fs from 'fs';
import ejs from 'ejs'; //npm install ejs
import url from 'url';
import path from 'path';
//path > 가상 url 
//func > 함수 주소
//filename "요청에 대해서 응답함 html파일 전체 경로는 상수나 다른 값을 ㅗ가공"
let memberData = [];
const pathMap=[
    {"path":"/", "func":index, "filename":"index"},
    {"path":"/member", "func":member, "filename":"member/join"},
    {"path":"/member/join", "func":member_join, "filename":""},
    {"path":"/member/list", "func":list, "filename":"member/list"},
];
const hostname = "127.0.0.1"
const port = "3000"
const hosturl = `${hostname}:${port}` 
//ejs => html 문서와 json객체를 합쳐서 새로운 html을 만든다
//       렌더링
//createServer 클라이언트가 접속요청을 하면 자신한테 전달된 callback함수 호출
let server = http.createServer((request, response)=>{
    let pathName = url.parse(request.url, true).pathname;
    if(request.method=="GET")
    {
        let idx = pathMap.findIndex((item)=> item.path == pathName);
        if( idx !=-1)
        {
            request["filename"] = pathMap[idx].filename;
            pathMap[idx].func(request, response);
        }
    }
    else if(request.method=="POST" )
    {
        let idx = pathMap.findIndex((item)=> item.path == pathName);
        if( idx !=-1)
        {
            pathMap["filename"] = pathMap[idx].filename;
            pathMap[idx].func(request,response);
        }
    }
    else
    {
       response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
       response.end("<h1>한글도가능</h1>");
    }
});
server.listen(3000, "127.0.0.1", ()=>{
    console.log(`${hosturl} start`);
    //listen 이 완료되면 호출된다.
})

//파일을 폴더로부터 읽어서 전달해주는 함수
async function readFile(filename){
    let file = path.resolve() + "/html/" + filename + ".html"
    let filedata = "";
    filedata = await fs.promises.readFile(file, 'utf-8');

    return filedata
}
async function index(request, response){
    let filedata = await readFile(request['filename']);
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    response.end(filedata)
}
async function member(request, response){
    let filedata = await readFile(request['filename']);
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    response.end(filedata)
}
function member_join(request,response){
    let body = ""
    request.on("data", (data)=>{
        body+=data;
    })

    request.on("end", ()=>{
        let params = new URLSearchParams(body);
        const obj = Object.fromEntries(params); // json객체로 Converting
        memberData.push(obj);

        console.log(memberData)
        response.writeHead(302, {"location": "http://127.0.0.1:3000"})
        response.end("등록성공")
    })

    //등록과정을 거친 후 페이지를 redirect를 해줘야함
    //redirect를 하지 않을 시 post가 계속 진행되 데이터 삽입에 이상이 생긴다    .
    // 정보가 계속 추가 되는 것을 막기 위해서 redirect를 통해 데이터를 지워줘야한다.
}

async function list(req, res){
    let filedata = await readFile(req['filename']);
    let data = ejs.render(filedata, {"memberlist": memberData});
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end(data)
}