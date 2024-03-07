import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Layout from './component/Board/layout';
import {Routes, Route} from 'react-router-dom'
import Home from './component/home.js'
import HeroList from './component/hero/herolist';
import HeroView from './component/hero/heroview';
import NoMatch from './component/nomatch.js';
import Add from './component/add.js';
import UserInfo from './component/hero/userinfo';
import Score from './component/Board/result.js';
function App() {
  return (
    <div className="container-fluid">
      {/** 실제 화면에 보여지진 않음
       * url과 컴포넌트를 연결하는 것.
       * 기존 컨트롤러에 선언하는 것과 비슷하게 컴포넌트와 url을 연결해야한다.
       * Routes는 이런 url과 컴포넌트의 연결을 정의하는 곳
       * route에 각각 정의해야함 // 이중 index는 기본 path
       * 그룹으로 관리가 가능하다 ex  board/write board/show board/detail 과 같이 앞에 선언된
       * url이 같은 경우 board라는 그룹으로 관리 가능함 >> layout > 이걸 띄우기 위한 element
       */}
      <Routes>
        <Route path = "/" element={ <Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path= "/hero/list" element={<HeroList/>}></Route>
          <Route path= "/hero/view/:id" element={<HeroView/>}></Route>
          <Route path= "add/:x/:y" element={<Add/>}></Route>
          <Route path= "/user" element={<UserInfo/>}></Route>
          <Route path= "/score" element={<Score/>}></Route>
          <Route path= "*" element={<NoMatch/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
