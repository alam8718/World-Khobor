import React from "react";
import BlogPage from "./BlogPage";


function Blogs() {
  return (
    <div className="">
      <div className="py-40 bg-[#2E3532] text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-[#F9A620] ">
          Blog Page
        </h1>
      </div>

      {/* blogs container  */}
      <div className=" max-w-7xl mx-auto">
        <BlogPage  />
      </div>
      
    </div>
  );
}

export default Blogs;
