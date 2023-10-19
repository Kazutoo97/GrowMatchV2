import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ to }) => {
  return (
    <div className="remember-forgot flex justify-between text-sm text-gray-600 font-medium -mt-4 mb-6">
      <label>
        <input type="checkbox" className="accent-primaryFive mr-1" />
        Remember me
      </label>
      <Link to={to} className="hover:underline text-gray-600 ">
        Forgot password?
      </Link>
    </div>
  );
};

export default ForgotPassword;
