import React from "react";

const InputRegisterLogin = ({ className, title, type, errors, ...rest }) => {
  return (
    <div className={`w-full ${className}`}>
      <label className="block mb-1 text-start text-gray-600 text-base font-medium">
        {title}
        <span className="text-red-500 ml-1 ">*</span>
      </label>
      <div className="w-full">
        <input
          type={type}
          className="w-full h-10 border text-gray-600 border-gray-300 px-4 rounded-md text-base outline-none focus:border-primaryFive focus:border-[2px]"
          required
          {...rest}
        />
      </div>
      {errors && (
        <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
          {errors}
        </p>
      )}
    </div>
  );
};

export default InputRegisterLogin;
