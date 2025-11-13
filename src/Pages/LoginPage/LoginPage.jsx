import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginPage = () => {
  const { user, setUser, signIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user1 = result.user;
        setUser(user1);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-(--color-primary)">
          Welcome Back to HabitRise
        </h2>
        <p className="text-center text-gray-500">
          Sign in to access your account and track your progress.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="form-control">
            <label
              htmlFor="email"
              className="label font-medium text-(--color-primary)"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="password"
              className="label font-medium text-(--color-primary)"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <div className="grow h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full py-3 rounded-full border border-gray-300 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all">
          <img
            className="w-5 h-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google Logo"
          />
          <span className="font-medium text-gray-600">
            Continue with Google
          </span>
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-(--color-accent) hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
