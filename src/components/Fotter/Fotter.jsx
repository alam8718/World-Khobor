import React from "react";

function Fotter() {
  return (
    <>
      <div className="w-full bg-[#2E3532]  cursor-pointer  ">
        <div className="py-10 mx-20 flex flex-col md:flex-row justify-between ">
          <div className="flex flex-wrap gap-3 justify-between w-full md:w-[60%] ">
            <div>
              <p className="text-white">Category</p>
              <ul className="text-gray-500">
                <li>News</li>
                <li>World</li>
                <li>Games</li>
                <li>References</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <p className="text-white">Business</p>
              <ul className="text-gray-500">
                <li>Web</li>
                <li>E-Commerce</li>
                <li>Entertainment</li>
                <li>Portfolio</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <p className="text-white">Sponsors</p>
              <ul className="text-gray-500">
                <li>Microsoft</li>
                <li>Apple</li>
                <li>Bloger Community</li>
              </ul>
            </div>
            {/*  */}
            <div>
              <p className="text-white">Technology</p>
              <ul className="text-gray-500">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Blockchain</li>
                <li>Netwoking</li>
              </ul>
            </div>
          </div>
          {/* subscribe part */}
          <div>
            <h1 className="text-white my-2">Subscribe For Updates</h1>
            <div className=" flex gap-3">
              <input
                type="text"
                className="p-2 outline-none ring-1 ring-amber-600  rounded-md text-base"
              />
              <button className="px-2 py-2 bg-amber-400 rounded-md font-semibold">
                Subsrcibe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
