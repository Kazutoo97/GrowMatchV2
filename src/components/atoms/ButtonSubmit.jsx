import React from "react";

const ButtonSubmit = ({ title, type, className, ...rest }) => {
  return (
    <button
      type={type}
      className={`w-full h-11 bg-primaryFive hover:bg-primarySeven transition duration-300 border-none outline-none rounded-md text-white font-semibold text-base ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default ButtonSubmit;
