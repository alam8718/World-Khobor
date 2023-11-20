import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {
  FaMeta,
  FaXmark,
  FaBars,
  FaSquareXTwitter,
  FaDribbble,
} from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };

  const navitems = [
    {path: "/", link: "Home"},
    {path: "/services", link: "Services"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"},
  ];
  return (
    <>
      <header className="bg-[#37371F] fixed top-0 right-0 left-0  ">
        <nav className="px-4 py-4 flex justify-between md:mx-5">
          <div className="text-[#EAEFBD] text-2xl">
            <a href="/">
              World <span className="text-[#90BE6D]">Khobor</span>
            </a>
          </div>

          {/* nav items */}
          <div className="">
            <ul className="lg:flex gap-12 hidden text-lg  ">
              {navitems.map(({path, link}) => (
                <li className="text-amber-400 font-semibold " key={path}>
                  <NavLink
                    to={path}
                    className={({isActive}) =>
                      `text-amber-400 font-semibold  ${
                        isActive
                          ? `text-[#EA2B1F] pb-2 duration-300  border-b border-[#EDAE49] `
                          : `text-amber-400`
                      }`
                    }>
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* menu icon  */}
          <div className="text-white lg:flex  gap-4 items-center  hidden   ">
            <a
              href="/"
              className="hover:text-amber-400 hover:scale-125 duration-300">
              <FaMeta size={20} />
            </a>
            <a
              href="/"
              className="hover:text-amber-400 hover:scale-125 duration-300">
              <FaSquareXTwitter size={20} />
            </a>
            <a
              href="/"
              className="hover:text-amber-400 hover:scale-125 duration-300">
              <FaDribbble size={20} />
            </a>
            <button className="px-4 py-1 rounded-lg cursor-pointer text-[#37371F] font-semibold bg-[#EA9010] hover:scale-105 duration-300">
              Log in
            </button>
          </div>

          {/* mobile menu bar  */}
          <div className="text-white lg:hidden z-[99]">
            <button className="cursor-pointer" onClick={handleToggle}>
              {open ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>

        {/* navitems for mobile  */}
        <div className="">
          {open ? (
            <ul
              className={`lg:hidden h-screen  gap-12  text-lg space-y-4 flex flex-col items-center justify-center w-full bg-[#37371F] ${
                open
                  ? "fixed top-0 left-0 transition-all ease-out duration-500 "
                  : "hidden"
              } `}>
              {navitems.map(({path, link}) => (
                <li
                  className="text-white font-semibold hover:shadow-lg hover:border hover:border-amber-300 hover:text-[#37371F] hover:shadow-amber-400  w-40 text-center rounded-lg py-2 hover:bg-[#EA9010] hover:scale-110 hover:duration-300 ease-out border-gray-4 "
                  key={path}>
                  <NavLink onClick={handleToggle} to={path}>
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
