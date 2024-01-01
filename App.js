import React from "react";
import ReactDOM from "react";
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style:{
        color:'magenta',
        fontSize:'30px'
      },
    },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      className:'heading2'
    },
    "Heading 2"
  );
  
  const sub=(a,b)=>{
    return a-b;
  }
  console.log(sub);
  const add=React.createElement(
    "div",
    {
        id:'math'
    },
    "Kriti's age is:"+ sub(2023,2000)
  );
  console.log(heading);
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
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(container);