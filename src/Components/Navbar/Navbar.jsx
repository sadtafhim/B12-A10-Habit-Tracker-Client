import React from "react";
import habitLogo from "../../assets/Habit-rise.png";

const Navbar = () => {
  return (
    <div className="navbar px-6 py-3 bg-lightBg shadow-sm border-b border-secondary/30">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-1">
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
            className="menu menu-sm dropdown-content bg-lightBg rounded-box mt-3 z-1 w-52 p-2 shadow font-body text-textMain"
          >
            <li>
              <a className="rounded-full bg-linear-to-r from-primary to-secondary text-white font-medium">
                Home
              </a>
            </li>
            <li>
              <a>Browse Public Habits</a>
            </li>
            <li>
              <a>Teach Habit Skills</a>
            </li>
          </ul>
        </div>

        <img src={habitLogo} alt="HabitRise Logo" className="w-20" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 font-body text-textMain">
          <li>
            <a className="py-2 px-4 rounded-full bg-linear-to-r from-primary to-secondary text-white font-medium">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition">
              Browse Public Habits
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition">Teach Habit Skills</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <a className="py-2 px-5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition">
          Sign In
        </a>
        <a className="py-2 px-5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition font-medium">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
