import React from "react";
import ReactDOM from "react-dom/client";
/*const heading = React.createElement(
    "h1",
    {
      id: "title",
      style:{
        color:'magenta',
        fontSize:'30px', 
        backgroundColor:'yellow'
      },
      key:"h1",
    },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      className:'heading2',
      key:"h2",
    },
    "Heading 2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
      style:{
        color:'blue',
        fontSize:'30px'
      },
    },
    [heading, heading2,add]
  );*/
  
 
  const NestedHeader=(
    <div style={{color:'white',backgroundColor:'blue'}}>
      <h1>ele: Heading 1</h1>
      <h2>ele: Heading 2</h2>
      <h3>ele: Heading 3</h3>
    </div>
  )

  const CompHeader =()=>{
    return (
      <div style={{color:'red',backgroundColor:'yellow'}}> 
       <div style={{color:'Pink',backgroundColor:'grey'}}>
        <p>Ele in Comp</p>
        {NestedHeader}
        </div>
       <h1>comp in comp: Heading 1</h1>
       <h2>comp in comp: Heading 2</h2>
       <h3>comp in comp: Heading 3</h3>
        
      </div>
    )
    };

const Header =()=>{
  return (
    <div style={{color:'white',backgroundColor:'purple'}}>
      {NestedHeader}
      <CompHeader/>
     <h1>comp: Heading 1</h1>
     <h2>comp: Heading 2</h2>
     <h3>comp: Heading 3</h3>
      
    </div>
  )
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<Header/>);