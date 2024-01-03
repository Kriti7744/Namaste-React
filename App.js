import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./user.jpeg";
import food from "./food.png";

const Header=()=>{
  const headerStyle = {
    display: "flex",
    padding: "10px",
    backgroundColor: "gray",
  };

  const logoStyle = {
    width: "50px",
    height: "auto",
  };

  const searchInputStyle = {
    flex: "1", 
    margin: "0 10px", 
    padding: "6px",
    borderRadius: "4px",
    border: "none",
    outline: "none",
  };

  const userIconStyle = {
    width: "50px",
    height: "auto",
  };

 return(
  <header style={headerStyle}>
   <img src={food} alt="Food logo" style={logoStyle} ></img>
   <input type="search" placeholder="search your favorite food" style={searchInputStyle}></input>
   <img src={icon} alt=" User icon" style={userIconStyle}></img>
  </header>
 )
}
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<Header/>);