import {useParams} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
function Score() {
    const [userinfo, setUserinfo] = useState({name:"", eng :"", kor:"", math:""})
    const [value, setValue] = useState("")
    const {name, eng, kor, math} = userinfo; //모던스크립트의 해체
    /*
        name = userinfo.name;
        phone = userinfo.phone;
        email = userinfo.email;
        math = userinfo.email;
    */
   const nameChange = (e)=>{ setUserinfo({...userinfo, name:e.target.value})}
   const engChange = (e)=>{ setUserinfo({...userinfo, eng:e.target.value})}
   const korChange = (e)=>{ setUserinfo({...userinfo, kor:e.target.value})}
   const mathChange = (e)=>{ setUserinfo({...userinfo, math:e.target.value})}
    const sendData = async()=>{
        let result = await axios.post("http://localhost:8080/result", userinfo);
        console.log(result.data)
        setValue(result.data.total)
    } // then 구문 없이 작성 가능함. 다만 async await 사용 필요
   
    return(
        <div>
            이름 <input type="text" onChange = {nameChange} value = {name}/><br/>
            영어 <input type="text" onChange = {engChange} value = {eng}/><br/>
            한국어 <input type="text" onChange = {korChange} value = {kor}/><br/>
            수학 <input type="text" onChange = {mathChange} value = {math}/><br/>
            <button type="button" onClick={sendData}>전송</button><br/>
            총점 <input type="text" value = {value} readOnly/><br/>
        </div>
    )
}

export default Score;