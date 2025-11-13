import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const { createUser, setUser, updateUser, googleLoginHandle } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleLogin = () => {
    googleLoginHandle().then(() => {
      navigate(from, { replace: true });
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;

    if (name.length < 5) {
      toast.error("Name should be at least 5 characters long");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => setUser({ ...user, displayName: name, photoURL: photo }))
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
        navigate(from, { replace: true });
        toast.success("Account created successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-(--color-primary)">
          Create Your HabitRise Account
        </h2>
        <p className="text-center text-gray-500">
          Sign up to start tracking your habits and progress.
        </p>

        <form onSubmit={handleRegistration} className="space-y-5">
          <div className="form-control">
            <label
              htmlFor="name"
              className="label font-medium text-(--color-primary)"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

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
              placeholder="Enter your email"
              required
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="photoURL"
              className="label font-medium text-(--color-primary)"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              placeholder="Enter your photo URL"
              required
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
              placeholder="Enter your password"
              required
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <div className="grow h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={googleLogin}
          className="w-full py-3 rounded-full border border-gray-300 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
        >
          <FcGoogle />
          <span className="font-medium text-gray-600">
            Continue with Google
          </span>
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-(--color-accent) hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
