import React, { useState } from "react";
import { RestaurantList } from "../src/config";
import { RestaurantCard } from "./card";
import {useEffect} from "react";

function filterData(searchText,restaurants){
  console.log(searchText);
  if (!searchText || searchText.trim()==="") {
    return restaurants;
  }
  const filtered = restaurants.filter((res) =>
  res.data.name.toLowerCase().includes(searchText.toLowerCase())
);
console.log(filtered);
return filtered;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants]= useState(RestaurantList);

  useEffect(()=>{
getRestaurants();  },[searchText])

  async function getRestaurants(){
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json = await data.json();
    console.log(json);
  }
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


  return (
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
          const data= filterData(searchText,restaurants);
          setRestaurants(data);
        }}
        >Search
        </button>
      </div>
      <div style={gridContainerStyle}>
        {restaurants.map((restaurant) => {
          return(
            <RestaurantCard 
             key={restaurant.data.id} 
             style={cardStyle}
             {...restaurant.data}
             />
        )
        })}
            
      </div>
    </div>
  );
};

export default Body;
