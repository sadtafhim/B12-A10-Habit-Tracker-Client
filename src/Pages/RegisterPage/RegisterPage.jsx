import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-[var(--color-primary)]">
          Create an Account
        </h2>
        <p className="text-center text-gray-500">
          Sign up to access your account
        </p>

        {/* Form layout */}
        <form className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label text-(--color-primary)">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label text-(--color-primary)">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="confirmPassword"
              className="label text-(--color-primary)"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-2 text-white"
          >
            Register
          </button>
        </form>

        {/* Google sign up button */}
        <div className="text-center space-x-2">
          <span className="text-gray-600">OR</span>
          <button className="btn btn-outline w-full py-2 mt-3">
            <img
              className="w-5 h-5 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt="Google Logo"
            />
            Continue with Google
          </button>
        </div>

        {/* Redirect to login */}
        <Link to="/auth/login" className="mt-4 block text-center">
          <span className="text-sm text-gray-500">
            Already have an account?
          </span>
          <p className="text-(--color-accent)">Sign In</p>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
