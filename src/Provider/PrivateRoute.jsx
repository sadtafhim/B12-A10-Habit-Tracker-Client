import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { RotateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RotateLoader color="#22c55e" size={15} />
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
