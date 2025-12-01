import React from "react";
import Logo from "../../../components/Logo";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3 text-accent">
        <a className="px-5 py-1.5 border rounded-lg" href="">Sign In</a>
        <a href="" className="px-5 py-1.5 border rounded-lg bg-primary">Be a rider</a>
        <a href="" className="h-10 w-10 rounded-full border flex justify-center
         items-center bg-black text-primary"><GoArrowUpRight style={{ strokeWidth: 1 }} size={30} /></a>
      </div>
    </div>
  );
};

export default Navbar;
