import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { RotateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-lightBg">
        <RotateLoader
          color="var(--color-primary)"
          loading={loading}
          size={12}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="mt-4 text-primary font-semibold text-lg tracking-wide">
          Loading
        </p>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
