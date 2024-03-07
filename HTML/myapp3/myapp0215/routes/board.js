var express = require('express');
var router = express.Router();

let board_list = [
    { id : 1,title : "wait for you", writer : "yejun", content : "hello", date : "2024-01-25"},
    { id : 2,title : "wait for you", writer : "noah", content : "hello", date : "2024-01-25"},
    { id : 3,title : "wait for you", writer : "bambi", content : "hello", date : "2024-01-25"},
    { id : 4,title : "wait for you", writer : "yenho", content : "hello", date : "2024-01-25"},
    { id : 5,title : "wait for you", writer : "hamin", content : "hello", date : "2024-01-25"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
        res.redirect("board/list", {board_list : board_list})
        //페이지 이동 시 사용하는 것이 redirect로 중간에 있던 정보를 지워준다.
});

router.get('/list', function(req, res, next) {
    res.render("board/board_list", {board_list : board_list})
    //페이지 이동 시 사용하는 것이 redirect로 중간에 있던 정보를 지워준다.
}); 

router.get('/view/:id', function(req, res, next) {
    console.log()
    let content = board_list[req.params.id]
    if (content == undefined)
        res.send("<h1> no data<h1>")
    else
        res.render("board/board_view", {content : content})
    //페이지 이동 시 사용하는 것이 redirect로 중간에 있던 정보를 지워준다.
});

router.use('/write', function(req, res, next) {
    if (req.method == 'GET'){
        res.render('board/board_write')
        return
    }
    let body = req.body;
    let id = board_list[board_list.length - 1].id;
    console.log(id)
    id = parseInt(id) + 1;
    let date = new Date();
    body = {...body, id : id, date: date.toLocaleDateString()};

    board_list.push(body);
    res.redirect("/board/list")
    //redirect로 이동하지 않을 시 정보를 그대로 담고 있음 
});
  module.exports = router;
  