import React from "react";

const CheckBox = ({ title, type }) => {
  return (
    <p className="flex items-center space-x-1">
      <span>
        <input type={type} className="h-4 w-4 bg-primaryFive" />
      </span>
      <span className="text-gray-500 text-sm">{title}</span>
    </p>
  );
};

export default CheckBox;
