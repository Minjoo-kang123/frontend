import {useEffect} from "react"
import {useState} from "react"
import axios from "axios"
function HeroList() {
    const [hero, setHero] = useState([]);
    const [loading, setLoading] = useState(false);
    //json 배열을 통해 데이터 출력
    
    //window.onload or 생성자와 비슷한 역할
    useEffect(()=>{
        /*setHero(...hero,[
            {"id" : 1, "name":"yejun", "description":"start of plave"},
            {"id" : 2, "name":"yejun", "description":"of plave"},
            {"id" : 3, "name":"yejun", "description":" plave"}
        ])*/
        axios.get("http://localhost:8080/hero/list")
        .then((res)=>{
            console.log(res)
            setHero(res.data);
        }).catch((err)=>{
            console.log(err)
        })
        //해당 부분은 axios로 바꿀 시 백엔드 통신이 됨
        setLoading(true)
    }, [])
    /**백엔드서버와 통신
     * useEfrfect 맨 처음에 컴포넌트가 실제 태그들과 마운트 될 떄
     * 맨처음에 컴포넌트가 실재 태그들과 마운트 해제될 때
     * set으로 특정 변수 값을 바꾸면 자동 호출
     */
    return ( 
    <div>
        <h1>영웅들</h1>
        {
            loading?
            hero.map((h,i)=>{
                return (<h3>{h.id}, {h.name}, {h.description}</h3>)
            }):" "
        }
    </div> );
}

export default HeroList;