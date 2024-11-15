import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex flex-col min-h-screen items-center justify-center space-y-8">
        <h1 className="text-9xl font-bold">Oops...</h1>
        <p className="text-3xl">404 Not Found</p>
        <button onClick={handleNavigate} className="btn">
          Previous Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
