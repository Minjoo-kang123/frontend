import http from 'http'
import fs from 'fs'
import ejs from 'ejs'
import url from 'url'
//ejs -> html 문서와 json객체를 렌더링 해줄 때 사용한다.
const pathMap = [
    {path : "/", func:index}
    ,{path : "/test", func:test}
    ,{path : "/add", func:add} //입력창으로 이동
    ,{path : "/add_result", func:add_result}
    ,{path : "/money", func:money}
    ,{path : "/money_result", func:money_result}
    ,{path : "/idCheck", func:idCheck}
    ,{path : "/member", func:member} //
    ,{path : "/regist", func:regist} //axios를 써서 ==> 결과 json으로 반환
    //결과를 html이 아닌 json으로 전송. RestfulApi
    //id 중복체크 / 회원가입 페이지 이동 / 회원가입
]
let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;

    let idx = pathMap.findIndex(item=> item.path == pathName)   
    if(idx == -1){
        res.writeHead(404, {"Content-Type":"text/html"})
        res.end("<h1> error </h1>")
        return
    }
    pathMap[idx].func(req, res);
})

server.listen(3000, "127.0.0.1", () =>{
    console.log("http://127.0.0.1:3000")
})

/**
 * nodemon >> node monitoring -> if source is chaging, the server resatrs
 * 
 */

function index(req, res){
    fs.readFile("./html/index.html", "utf-8", (error, data) =>{

        let result = ejs.render(data)
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}
function test(req, res){
    
    let query = url.parse(req.url, true).query; 
    console.log(query)
    fs.readFile("./html/add.html", "utf-8", (error, data) =>{
        if(error){
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end("<h1> error </h1>")
            return
        }/**
         * ejs에서 render가 json으로 가져온 데이터를 렌더링해 편집해준다.
         */
        let result = ejs.render(data, query)
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}

function add(req, res){
    fs.readFile("./html/add.html", "utf-8", (error, data) =>{
        if(error){
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end("<h1> error </h1>")
            return
        }/**
         * ejs에서 render가 json으로 가져온 데이터를 렌더링해 편집해준다.
         */
        let result = ejs.render(data)
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}

function add_result(req, res){
    let opp = ["+","-","*","/"]
    let query = url.parse(req.url, true).query; 
    console.log(query)
    fs.readFile("./html/add_result.html", "utf-8", (error, data) =>{
        if(error){
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end("<h1> error </h1>")
            return
        }
        let result = 0
        let index = parseInt(query.operator) - 1
        if(query.operator == 1)
            result = ejs.render(data, {...query, "result": parseInt(query.x) + parseInt(query.y), "oper" : opp[index]})
        else if(query.operator == 2)
            result = ejs.render(data, {...query, "result": parseInt(query.x) - parseInt(query.y), "oper" : opp[index]})
        else if(query.operator == 3)
            result = ejs.render(data, {...query, "result": parseInt(query.x) * parseInt(query.y), "oper" : opp[index]})
        else if(query.operator == 4)
            result = ejs.render(data, {...query, "result": parseInt(query.x) / parseInt(query.y), "oper" : opp[index]})
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}
function money(req, res){
    fs.readFile("./html/money.html", "utf-8", (error, data) =>{
        if(error){
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end("<h1> error </h1>")
            return
        }/**
         * ejs에서 render가 json으로 가져온 데이터를 렌더링해 편집해준다.
         */
        let result = ejs.render(data)
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}

function money_result(req, res){
    let query = url.parse(req.url, true).query; 
    console.log(query)
    let num = parseInt(query.time) * parseInt(query.perpay)
    let result = { "name" : query.name, "result" : num}
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end(JSON.stringify(result))
    //fs.readFile("./html/money_result.html", "utf-8", (error, data) =>{
      //  if(error){
    //        res.writeHead(404, {"Content-Type":"text/html"})
    //        res.end("<h1> error </h1>")
            return
    //    }
        

       // let num = parseInt(query.time) * parseInt(query.perpay)
       // let result = ejs.render(data, {...query, "result": num})
       // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
       // res.end(result)
}


function member(req, res){
    fs.readFile("./html/member.html", "utf-8", (error, data) =>{
        if(error){
            res.writeHead(404, {"Content-Type":"text/html"})
            res.end("<h1> error </h1>")
            return
        }
        let result = ejs.render(data)
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.end(result)
    })
}
let memberData = []

function idCheck(req, res){
    let query = url.parse(req.url, true).query; 
    console.log(query)
    let result = {};
    let userid = query.userid;
    let idx = memberData.findIndex((mem)=>{ return  mem.userid == userid})
    if(idx != -1){
        result = {"idchk" : "N"}
    }else{
        result = {"idchk" : "Y"}
    }
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end(JSON.stringify(result))
}
function regist(req, res){
    let query = url.parse(req.url, true).query; 
    console.log(query)
    memberData.push(query)
    
    let result = {"result":"Sucess", "msg":"등록되었습니다."}
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end(JSON.stringify(result))
}