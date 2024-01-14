import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { img_cdn_url
 } from "../src/config";
import { useState
 } from "react";
const Menu=()=>{
    const {id}=useParams();

    const [restaurant,setRestaurant]=useState({});
    useEffect(()=>{
        getMenu();
    },[]);

    async function getMenu(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        setRestaurant(json?.data?.cards);
        console.log(json.data.cards);
        
    }
    return(
        <div>
            <h1>Restaurant id: {id}</h1>
         {console.log(restaurant)}
        </div>
    );
};

export default Menu;