import React from "react";
import Banner from "../Pages/Banner";
import BlogPage from "../Blogs/BlogPage";
import Fotter from "../Fotter/Fotter";

function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto">
      <BlogPage />
      </div>
      <Fotter />
      
    </>
  );
}

export default Home;
