
import {useParams} from "react-router-dom"
function HeroView() {
    let {id} = useParams();
    return ( 
        <div>
            <h1>{id}</h1>
        </div>

     );
}

export default HeroView;

/**
 * /hero/view/:id >> id 값을 어떻게 받는가
 * 
 */