import React from "react";
import habitLogo from "../../assets/Habit-rise.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar px-6 bg-lightBg shadow-sm border-b border-secondary/30">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h12M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm bg-accent dropdown-content rounded-box mt-3 z-1 w-52 p-2 shadow font-body text-textMain"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-habit">Add Habit</NavLink>
            </li>
            <li>
              <NavLink to="/my-habit">My Habits</NavLink>
            </li>
            <li>
              <NavLink to="/public-habit">Browse Public Habits</NavLink>
            </li>
          </ul>
        </div>
        <img src={habitLogo} alt="HabitRise Logo" className="w-30" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 font-body text-textMain">
          <li>
            <NavLink to="/" className="hover:text-primary transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-habit" className="hover:text-primary transition">
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-habit" className="hover:text-primary transition">
              My Habits
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public-habit"
              className="hover:text-primary transition"
            >
              Browse Public Habits
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <a className="py-2 px-5 rounded-full bg-linear-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition">
          Sign In / Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
