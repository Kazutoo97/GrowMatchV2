import React from "react";
import { Link } from "react-router-dom";

const HaveAccount = () => {
  return (
    <div className="pt-4 text-center text-sm font-medium text-gray-600">
      Sudah punya akun?{" "}
      <Link
        to="/login"
        className="text-primaryFive hover:underline font-semibold"
      >
        Login di sini
      </Link>
    </div>
  );
};

export default HaveAccount;
