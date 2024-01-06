import { RestaurantList } from "../src/config";
import { RestaurantCard } from "./card";
const Body=()=>{
    const styleList={
      display:"grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "10px",
    }
    return (
      <div style={styleList} >
        {
          RestaurantList.map(restaurant=>{
              return  <RestaurantCard {...restaurant.data}/>
  
          })
        }
        </div>
    )
  }

  export default Body; 