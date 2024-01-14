import React, { useState } from "react";
import { RestaurantList } from "../src/config";
import { RestaurantCard } from "./card";
import {useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
 // console.log(searchText);
  if (!searchText || searchText.trim()==="") {
    return restaurants;
  }
  const filtered = restaurants.filter((res) =>
  res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
//console.log(filtered);
return filtered;
}

const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants]= useState([]);

  useEffect(()=>{
getRestaurants();
  },[])

  async function getRestaurants(){
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  //console.log("render");
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const styleSearchContainer = {
    display: "flex",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    flex: "1",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    marginRight: "10px",
  };

  const searchButtonStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #007BFF",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  };

  const gridContainerStyle = {
    display: "flex", 
    flexWrap: "wrap", 
    justifyContent: "center",
  };

  const cardStyle = {
    width: "200px",  
    margin: "10px", 
  };

  // if(filteredRestaurants?.length===0)
  // return <h1>Oops! No Restaurant Found :( </h1>

  return allRestaurants?.length===0?(<Shimmer/>):(
    <div style={styleContainer}>
      <div style={styleSearchContainer}>
        <input
          type="text"
          placeholder="Search your favorite food"
          style={searchInputStyle}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button style={searchButtonStyle} 
        onClick={()=>{
          const data= filterData(searchText,allRestaurants);
          setFilteredRestaurants(data);
        }}
        >Search
        </button>
      </div>
      <div style={gridContainerStyle}>
        {filteredRestaurants.map((restaurant) => {
          return(
            <RestaurantCard key={restaurant?.info?.id}
             style={cardStyle}
             {...restaurant.info}
             />
        )
        })}
            
      </div>
    </div>
  );
};

export default Body;
