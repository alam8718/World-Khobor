import React from "react";
import Data from "../../data";
import {Link} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";

function Sidebar() {
  const blogs = Data;
  return (
    <>
      <div className="hidden lg:block">
        <h3 className="text-2xl font-semibold my-10">Latest Blogs</h3>
        <div>
          {blogs.slice(5, 12).map((blog) => (
            <div key={blog.id} className="my-10 border-b-2 border-spacing-2 ">
              <h4 className="font-medium">{blog.title}</h4>
              <div className="cursor-pointer flex gap-3 items-center  text-[#7371FC] text-lg sm:text-xl  ">
                <Link to="/" className="text-base hover:text-blue-700 ">
                  Learn More
                </Link>
                <FaArrowRightLong size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* popular blogs  */}
      <div className="hidden lg:block">
        <h3 className="text-2xl font-semibold my-10">Popular Blogs</h3>
        <div>
          {blogs.slice(5, 12).map((blog) => (
            <div key={blog.id} className="my-10 border-b-2 border-spacing-2 ">
              <h4 className="font-medium">{blog.title}</h4>
              <div className="cursor-pointer flex gap-3 items-center  text-[#7371FC] text-lg sm:text-xl  ">
                <Link to="/" className="text-base hover:text-blue-700 ">
                  Learn More
                </Link>
                <FaArrowRightLong size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
