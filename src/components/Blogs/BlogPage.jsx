import React, {useEffect, useState} from "react";
import BlogCard from "./BlogCard";
import Data from "../../data";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";
import Fotter from "../Fotter/Fotter";

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // for page change button
  //
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="h-screen w-auto">
      {/* blogcards section  */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard
          blogs={Data}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        <div>
          <Sidebar />
        </div>
      </div>
      {/* pagination section  */}
      <div className="my-10 ">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          blogs={Data}
          pageSize={pageSize}
        />
      </div>
      <div className="w-full">
      <Fotter />
      </div>
    </div>
  );
}

export default BlogPage;
