import React from "react";
import BlogPage from "./BlogPage"; 
import Unibanner from "../Pages/Unibanner";
import Fotter from "../Fotter/Fotter";


function Blogs() {
  return (
    <>
      <Unibanner text="Blogs " />

     
      <div className="h-screen ">
        <BlogPage  />
        <Fotter />
      </div>
      
    </>
  );
}

export default Blogs;
