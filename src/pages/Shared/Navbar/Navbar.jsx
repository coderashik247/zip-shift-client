import React from "react";
import Logo from "../../../components/Logo";
import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
      {
        user && <li>
          <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
        </li>
      }
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
        {user ? (
          <button
            onClick={handleLogOut}
            className="w-10 h-10 rounded-full border"
          >
            <img
              src={user?.photoURL || "/default-user.png"}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            
          </button>
        ) : (
          <Link to="/login" className="px-5 py-1.5 border rounded-lg" href="">
            Sign In
          </Link>
        )}
        <Link to="/rider" href="" className="px-5 py-1.5 border rounded-lg bg-primary">
          Be a rider
        </Link>
        <a
          href=""
          className="h-10 w-10 rounded-full border flex justify-center
         items-center bg-black text-primary"
        >
          <GoArrowUpRight style={{ strokeWidth: 1 }} size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
