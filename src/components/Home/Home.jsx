import React from "react";
import Banner from "../Pages/Banner";
import BlogPage from "../Blogs/BlogPage";

function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-full h-screen mx-auto">
        <BlogPage />
      </div>
      
    </>
  );
}

export default Home;
