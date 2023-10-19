import React from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const InputPassword = ({ togglePassword, passwordIcon }) => {
  return (
    <button
      type="button"
      className="absolute top-1/2 -translate-y-1/2 right-5"
      onClick={togglePassword}
    >
      {passwordIcon ? (
        <BsEyeSlash className="h-5 w-5" />
      ) : (
        <BsEye className="h-5 w-5" />
      )}
    </button>
  );
};

export default InputPassword;
