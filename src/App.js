import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { img_cdn_url } from "./config";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { useState } from "react";
import { useEffect } from "react";



const AppLayout=()=>{
  return(
    <>
       <Header/>
       <Body/>
       <Footer/>
    </>
   
  )
}


  
  const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<AppLayout/>);

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

// function A({  }) {
//   console.log('A');
//   const [state, setState] = useState(0);

//   useEffect(() => {
//     setState((prevState) => prevState + 1);
//   }, [state]);

//   return <B/>;
// }

// function B() {
//   console.log('B');
//   return <C />;
// }

// function C() {
//   console.log('C');
//   return null;
// }

// function D() {
//   console.log('D');
//   return null;
// }

// function App() {
//   console.log('App');
//   return (
//     <div>
//       <A>
//         <B />
//       </A>
//       <D />
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
