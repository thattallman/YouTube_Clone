import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import VideoPage from "./VideoPage";
import Error from "./Error";
const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    errorElement : <Error/>,
    children :[
      {
        path : "/",
        element : <MainContainer/>,
      },
      {
        path : "/watch" ,
        element : <VideoPage/>

      }
    ]
  }
])

export default appRouter;




