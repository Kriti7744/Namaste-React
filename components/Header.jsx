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
  
    const searchInputStyle = {
      flex: "1", 
      padding: "6px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      marginRight:"auto",
      marginLeft:"10px",
    };
  
  
  
    const styleUL={
      display:"inline",
      padding:0,
      
    };
    const styleLI={
      listStyleType: "none",
      margin:"0 10px",
      cursor: "pointer", 
      display:"inline", 
    };

    const x="Kriti";
    // const searchIconStyle={
    //   marginLeft: '10px',
    // color: '#333', 
    // cursor: 'pointer',
    // };
   const [searchText,setSearchText]=useState("KFC");
  
   return(
    <header style={headerStyle}>
     {/* <img src={khana} alt="Food logo" style={logoStyle} ></img> */}
     {/* <span> */}
     <input 
     type="text" 
     placeholder="search your favorite food" 
     style={searchInputStyle}
     value={searchText}
     onChange={(e)=>{
      setSearchText(e.target.value);
    }}
      >
     </input>
     {/* {<i className="fas fa-search" ></i> } */}
     {/* </span> */}
    
     
     
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