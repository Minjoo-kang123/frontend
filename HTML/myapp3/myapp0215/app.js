var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//정적인 웹페이지 > js, css, image, html 등 화면의 변화가 없는 것을 의미한다.
//파일을 업로드 할때는 반드시 물리적 경로가 필요하다
//물리적 경로를 논리적 경로(url)로 연결시켜야한다
//static 즉 정적으로 설정했을 시 url로 해당 폴더에 있는 파일 접근 가능

app.use("/image", express.static(__dirname + "/uploads"))
//파일 관리테이블을 별도로 관리
//DB에 동영상 및 이미지를 직접 저장 가능하나
//우리나라는 폴더에 업로드 후 DB에는 위치와 실 파일이름 등 
//찾아올 수 있는 이름을 별도로 저장
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

//Spring > Controller / node > Router
//Router 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // next라는 3번째 매개변수를 통해 현재 함수에서 외부에 있는 매개변수 호출해줌
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
