import React from "react";
import Fotter from "../Fotter/Fotter";

function Pagination({currentPage, blogs, pageSize, setCurrentPage}) {
  let pages = [];
  const totalPage = Math.ceil(blogs.length / pageSize);
  for(let i =1; i <= totalPage; i++){
    pages.push(i);
  }

  return(
    <>
    <div className=" flex justify-center gap-4 py-5  ">
      {
        pages.map((page , index)=>(
          <button key={index} className={ page === currentPage ? `px-3 py-1 rounded-lg bg-red-700 text-black` : `px-3 py-1 rounded-lg bg-amber-400 text-black`}
           onClick={()=> setCurrentPage(page)} >{page}</button>
        ))
      }
    </div>
    
    </>
  )
}

export default Pagination;
