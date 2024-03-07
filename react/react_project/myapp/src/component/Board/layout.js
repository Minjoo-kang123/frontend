//메인 골격 디자인 파일
import {Outlet, Link} from 'react-router-dom'
/**to > route에 정의되는 url이다. 
 * a태그는 외부로 나갈 때 
 * SPA는 한곳을 고정하고 나머지부분을 바꿔치기 하며 사용한다.
 * <Outlet/> Link나 NavLink 도 사용가능함.
 * NavLink >> active 기능이 있음 선택 시 활성화 되어있음을 나타내준다. // class 속성(bootstrap)*/

function Layout() {
    let activestyle = {
        color : "green"
    }
    return ( 
        <>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
            <div classNameName="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active"  to="/">Active</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hero/list">hello</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/inputname">hello</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
        <Outlet/> 
        </>
     );
}
//
export default Layout;