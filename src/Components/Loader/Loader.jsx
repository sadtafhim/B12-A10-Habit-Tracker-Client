import React from "react";
import { RotateLoader } from "react-spinners";

const Loader = ({ loading }) => {
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
};

export default Loader;
