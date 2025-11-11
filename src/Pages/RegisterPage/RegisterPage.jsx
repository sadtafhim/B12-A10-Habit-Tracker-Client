import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const RegisterPage = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user1 = result.user;
        setUser(user1);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-(--color-primary)">
          Create an Account
        </h2>
        <p className="text-center text-gray-500">
          Sign up to access your account
        </p>

        {/* Form layout */}
        <form onSubmit={handleRegistration} className="space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label text-(--color-primary)">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label text-(--color-primary)">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="photoURL" className="label text-(--color-primary)">
              PhotoURL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your Photo URL"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label text-(--color-primary)">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered w-full p-3 text-(--color-primary)"
              placeholder="Enter your password"
              required
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
