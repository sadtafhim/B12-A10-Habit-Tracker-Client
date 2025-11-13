import React, { use } from "react";
import habitLogo from "../../assets/Habit-rise.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Loged Out Successfully!"))
      .catch((error) => toast.error(error.message));
  };

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
            className="menu menu-sm bg-accent dropdown-content rounded-box mt-3 z-10 w-52 p-2 shadow font-body text-textMain"
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
        <Link to="/">
          <img src={habitLogo} alt="HabitRise Logo" className="w-30" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 font-body text-textMain">
          <li>
            <NavLink
              to="/"
              className="hover:text-primary transition font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-habit"
              className="hover:text-primary transition font-medium"
            >
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-habit"
              className="hover:text-primary transition font-medium"
            >
              My Habits
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/public-habit"
              className="hover:text-primary transition font-medium"
            >
              Browse Public Habits
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3 relative">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/6tG5L2G/default-avatar.png"
                  }
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-4 shadow bg-base-100 rounded-box w-60"
            >
              <li className="text-sm font-semibold text-textMain">
                {user.displayName || "Anonymous User"}
              </li>
              <li className="text-xs text-gray-500">{user.email}</li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex justify-center items-center w-full py-2 px-3 rounded-full text-white font-semibold bg-linear-to-r from-primary to-accent hover:opacity-90 transition"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="py-2 px-6 rounded-full text-white font-semibold bg-linear-to-r from-primary to-accent hover:opacity-90 transition"
          >
            Sign In / Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
