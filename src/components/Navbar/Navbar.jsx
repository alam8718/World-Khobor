import React from "react";
import {NavLink} from "react-router-dom";
import {FaMeta, FaSquareXTwitter,FaDribbble} from "react-icons/fa6";

function Navbar() {
  const navitems = [
    {path: "/", link: "Home"},
    {path: "/services", link: "Services"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"},
  ];
  return (
    <>
      <header className="bg-[#44633f]">
        <nav className="px-4 py-4">
          <div className="text-[#F2C14E] text-2xl">
            <a href="/">
              World <span className="text-[#16C172]">Khobor</span>
            </a>
          </div>

          {/* nav items */}
          <div className="">
            <ul className="md:flex gap-12 hidden text-lg  ">
              {navitems.map(({path, link}) => (
                <li className="text-[#531253] font-semibold " key={path}>
                  <NavLink to={path}>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* menu icon  */}
          <div className="text-white lg:flex gap-4 items-center hidden ">
            <a href="/" className=""><FaMeta /></a>
            <a href="/"><FaSquareXTwitter /></a>
            <a href="/"><FaDribbble /></a>
            <button className="px-4 py-1 rounded-lg text-[#A0ACAD] font-semibold bg-[#531253]">Log in </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
