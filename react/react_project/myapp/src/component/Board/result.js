import {useEffect} from "react"
import {useState} from "react"
import axios from "axios"
function ReturnResult() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);useEffect(()=>{
        axios.get("http://localhost:8080/user")
        .then((res)=>{
            let {name, age} = res.data;
            setUser(res.data);
            //setUser({...userInfo, name:name, age:age})
        }).catch((err)=>{
            console.log(err)
        })
        setLoading(true)
    }, [])
    
    return ( 
    <div>
        <h1>user</h1>
        {
            loading?
            user.map((h,i)=>{
                return (<h3> {h.name}, {h.age}</h3>)
            }):" "
        }
    </div> );
}

export default ReturnResult;