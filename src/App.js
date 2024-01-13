import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import { img_cdn_url } from "./config";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
const AppLayout=()=>{
  return(
    <>
       <Header/>
       {}
       <Outlet/>
       <Footer/>
    </>
   
  )
};

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }, 
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/restaurant/:id",
        element: <Menu/>,
      }
    ]
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter }/>);

