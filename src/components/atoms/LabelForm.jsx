import React from "react";

const LabelForm = ({ title, required }) => {
  return (
    <label className="block mb-1 text-start text-gray-600 text-base font-medium">
      {title}
      <span className="text-red-500 ml-1 ">{required}</span>
    </label>
  );
};

export default LabelForm;
