import http from 'http';
import fs from 'fs';
import ejs from 'ejs'; //npm install ejs
import url from 'url';
import path from 'path';
import express from 'express';
import multer from 'multer';
import exp from 'constants';

let app =  express();
const dirname = path.resolve();
const upload = multer({
    //업로드할 파일의 limit 지정
    storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
       //done() 함수는 첫 번째 인수에는 에러가 있다면 에러를 넣고, 두 번째 인수에는 실제 경로나 파일 이름을 넣어주면 된다.
        //req나 file의 데이터를 가공해 done으로 넘기는 식이다.
        destination(req, file, done) { // 저장 위치
            done(null, 'uploads/'); // uploads라는 폴더 안에 저장
        },
        filename(req, file, done) { // 파일명을 어떤 이름으로 올릴지
            const ext = path.extname(file.originalname); // 파일의 확장자
            //작업이 완료되면 호출될 함수:done이다
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            // 파일이름 + 날짜 + 확장자 이름으로 저장
        }
    }),
    limits: { fileSize: 20 * 1024 * 1024 } // 5메가로 용량 제한
  });
  //출처: https://inpa.tistory.com/entry/EXPRESS-📚-multer-미들웨어 [Inpa Dev :남성_기술_전문가::티스토리]
/**
 * 환경변수값 설정하기
 * views에 ejs 파일 놓을 우이치를 지정해야함
 * path.join함수는 c:/myapp2, "dest" => c:/myapp/dest 이런 식으로 /를 넣어 경로를 마들어줌
 * __dirname > 
 */
app.set("view engine", 'ejs')
app.set("views", path.join(dirname, 'views'))
app.use(express.static(dirname + "/public"))
app.use("/image", express.static(dirname + "/uploads"))
//미들웨어 
//Post 방식으로 전송 시 request 객체에 body를 붙여줌
//post로 오는 데이터만 별도 처리를 해서 body 속성을 만들어 보내준다
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// get >> query 와 params

app.get("/", (request, response) =>{
    //파일을 불러서 전송하기
    response.render("index", {title : "제목", content:"내용", plave : ["yejun", "noah", "Bambi", "yenho", "hamin"]});
})

app.get("/send", (request, response) =>{
    response.send("<h2>앨범작작내</h2>")
    response.send("<h2>시작</h2>")
})
app.get("/filedownload", (req, res)=>{
    // 한글같은 경우는 인코딩의 문제로 특별한 인코딩을 가져오는 처리가 필요하다.
    const filename = res.query.filename;
    res.setHeader("Content-Disposition", `attachement; filename=${encodeURLComponent(filename)}`)
    res.sendFile(path.resolve()+"/uploads/"+filename);
})
app.get("/filesend1", (req, res)=>{
    res.render("filesend1")
    //단순 화면ㅇㅣ동
})
app.get("/filesend2", (req, res)=>{
    res.render("filesend2")
    //단순 화면ㅇㅣ동
})
app.get("/filesend3", (req, res)=>{
    res.render("filesend3")
    //단순 화면ㅇㅣ동
})
/**
 * multer로 파일 업로드 하기
 * 1. npm install multer
 * 2. import multer from 'multer;
 */
app.post("/filesave1", upload.single('file'), (req, res)=>{
    console.log(req.file)
    res.json(req.file);

    const {fieldname, originalname, encoding, mimetype, filename, path, size} = req.file;
    console.log("fieldname : ", fieldname)
    console.log("originalname : ", originalname)
    console.log("encoding : ", encoding)
    console.log("mimetype : ", mimetype)
    console.log("filename : ", filename)
    console.log("path : ", path)
    console.log("size : ", (size/1024/1024).toFixed(2), "mb")
    
})

app.post("/filesave2", upload.array('file'), (req, res)=>{
    req.files.forEach((file) => {
        const {fieldname, originalname, encoding, mimetype, filename, path, size} = file;
        console.log("originalname : ", originalname)
    });
    
    res.json({result : "OK"});
        
})
app.use((request, response)=>{
    response.send("<h2>권한없음</h2>")
})
/**
 * 전송할 정보가 많을 시 wirtehead를 먼저 호출 후 
 * write를 여러번 호출
 * send는 2회이상 호출 시 error가 난다. 따라서 다회 호출은 
 */

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000")
})