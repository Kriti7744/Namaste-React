import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { img_cdn_url } from "./config";
import Footer from "../components/Footer";
import Body from "../components/Body";




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