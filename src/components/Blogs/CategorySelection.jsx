import React from "react";

function CategorySelection({onSelectedCategory, activeCategory}) {
  const allCategories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <>
      <div className="flex gap-2 justify-center flex-wrap my-6">
        <button className="px-4 bg-amber-400 rounded-md">All</button>
        {allCategories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? `px-4 bg-red-700 rounded-md`
                : `px-4 bg-amber-400 rounded-md`
            }
            onClick={() => onSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategorySelection;

// const uniqueCategory = blogs.reduce((allCategories, blog) => {
//   if (!allCategories.includes(blog.category)) {
//     allCategories.push(blog.category);
//   }
//   return allCategories;
// }, []);
