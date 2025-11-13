import React from "react";
import { Link, NavLink } from "react-router";
import habitLogo from "../../assets/Habit-rise.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBg text-center px-6">
      {/* Logo */}
      <img
        src={habitLogo}
        alt="HabitRise Logo"
        className="w-40 mb-6 animate-bounce-slow"
      />

      {/* 404 Title */}
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent leading-none">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-textMain text-lg mt-4 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="py-3 px-8 rounded-full text-white font-semibold bg-linear-to-r from-primary to-accent hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
