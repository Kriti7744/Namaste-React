import { useParams } from "react-router-dom";
const Menu=()=>{
    const {id}=useParams();
    return(
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>KFC</h2>
        </div>
    )
};

export default Menu;