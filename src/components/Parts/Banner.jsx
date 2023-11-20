import React from "react";
import {Link} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
function Banner() {
  return (
    <>
      <div className="px-4 py-32 bg-[#2E3532] mx-auto">
        <div className="text-white flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 ">
            Welcome to Our <span className="text-[#EA2B1F] ">Blog</span>
          </h1>
          <p className="font-primary sm:text-xl  mx-12 md:mx-[20%] ">
            Start your blog today & join a community of writers and readers who
            are passionate about sharing their stories and ideas. We offer
            everything you need to get started from helpful{" "}
            <span className="text-2xl px-1  ">Tips</span> and{" "}
            <span className="text-2xl px-1  ">Tutorials</span>.
          </p>
          <div className="flex gap-3 items-center  text-[#7371FC] text-lg sm:text-xl">
            <Link to="/">Learn More</Link>
            <FaArrowRightLong size={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
