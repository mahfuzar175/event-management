import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../src/assets/user.png";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loggingOut, setLoggingOut] = useState(false);
  const userName = user ? user.displayName : "";
  const userProfilePic = user ? user.photoURL : userDefaultPic;

  const handleSignOut = () => {
    setLoggingOut(true);
    logOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out: ", error.message);
      })
      .finally(() => {
        setLoggingOut(false);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" exact activeClassName="font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" activeClassName="font-bold">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/review" activeClassName="font-bold">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutus" activeClassName="font-bold">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="font-bold">
          Login
        </NavLink>
      </li>
    </>
  );
  <br />;

  return (
    <div className="navbar bg-base-100 p-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl font-bold">
          FestiveHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userProfilePic} alt={`${userName}'s profile`} />
          </div>
        </label>
        <span className="hidden md:inline-block font-semibold ml-1 mr-1">
          {userName}
        </span>
        {user ? (
          <button
            onClick={handleSignOut}
            className={`btn btn-ghost ${loggingOut ? "loading" : ""}`}
            disabled={loggingOut}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
