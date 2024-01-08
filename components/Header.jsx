import { useState } from "react";

const Header=()=>{
    const headerStyle = {
      display: "flex",
      padding: "10px",
      backgroundColor: "orange",
    };
  
    const logoStyle = {
      width: "70px",
      height: "auto",
      borderRadius: "8px",
  
    };
  
    const styleUL={
      display:"inline",
      padding:0,
      marginLeft:"auto",
      
    };
    const styleLI={
      listStyleType: "none",
      margin:"0 10px",
      cursor: "pointer", 
      display:"inline", 
    };
    const [title,setTitle]=useState("Food Palace");


    return(
    <header style={headerStyle}>
    
     <h1>{title}</h1>
      <ul style={styleUL} className="nav-items">
        <li style={styleLI}> <i className="fas fa-gift"></i>Offers</li>
        <li style={styleLI}><i className="fas fa-question-circle"></i>Help</li>
        <li style={styleLI}><i className="fas fa-user"></i>Profile</li>
        <li style={styleLI}><i className="fas fa-shopping-cart"></i>Cart</li>
      </ul>
    </header>
   )
  }

  export default Header;