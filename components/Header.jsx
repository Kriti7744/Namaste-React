import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const headerStyle = {
      display: "flex",
      padding: "10px",
     backgroundColor: "orange",
      alignItems: "center",
      
    };
  
    const logoStyle = {
      width: "70px",
      height: "80px",
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
    const h1Style = {
      marginLeft: "50px",
    };
    const [title,setTitle]=useState("Food Palace");
    const [isLogged,setIsLogged]=useState(true);

    useEffect(()=>{
      console.log("useEffect");
    });
    console.log("render");

    return(
    <header style={headerStyle}>
      <a href="/">
      <img src="data:image/png;base64,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"
       style={logoStyle}></img>
      </a>
     <h1 style={h1Style}>{title}</h1>
      <ul style={styleUL} className="nav-items">
        <li style={styleLI}> <i className="fas fa-gift" ></i>Offers</li>
        <Link to="/contact" style={styleLI}><i className="fas fa-phone"></i>Contact</Link>
        <Link to="/about" style={styleLI}><i className="fas fa-user" ></i>About Us</Link>
        <li style={styleLI}><i className="fas fa-shopping-cart"></i>Cart</li>
      </ul>
      {
        isLogged?(
          <button onClick={()=> setIsLogged(false)}>Logout</button>
        ):(
          <button onClick={()=> setIsLogged(true)}>Login</button>

        )
      }
    
    </header>
   )
  }

  export default Header;