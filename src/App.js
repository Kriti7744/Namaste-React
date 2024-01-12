import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { img_cdn_url } from "./config";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
const AppLayout=()=>{
  return(
    <>
       <Header/>
       <Body/>
       <Footer/>
    </>
   
  )
};

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter }/>);

