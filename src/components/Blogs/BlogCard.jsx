import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaRegCircleUser} from "react-icons/fa6";

function BlogCard({blogs, currentPage, selectedCategory, pageSize}) {
  const filterBlog = blogs
    .filter(() => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="md:h-[400px] mt-28 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
      {filterBlog.map((blog) => (
        <Link
          key={blog.id}
          className="p-4 shadow-lg shadow-slate-300 rounded-lg cursor-pointer">
          {/* blog image  */}
          <div>
            <img
              src={blog.image}
              alt={`${blog.category} image`}
              className="w-full"
            />
          </div>

          {/* blog info  */}
          <div className="my-4">
            <h1 className=" mb-2 font-bold hover:text-blue-500 cursor-pointer">
              {blog.title}
            </h1>
            <p className="font-semibold mb-1 flex gap-2 items-center text-slate-600">
              <FaRegCircleUser size={21} /> {blog.author}
            </p>
            <p className="text-sm text-slate-600">{blog.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;

