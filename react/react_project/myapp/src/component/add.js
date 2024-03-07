import {useParams} from "react-router-dom"
function Add() {
    let {x} = useParams();
    let {y} = useParams();
    console.log(x,y)
    return (<h1>{parseInt(x) + parseInt(y)}</h1>);
}

export default Add;