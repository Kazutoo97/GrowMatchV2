import React from "react";

const CardKategoriBelajar = ({ img, alt, title }) => {
  return (
    <div className="w-1/4 h-[360px] relative ">
      <img
        src={img}
        alt={alt}
        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
      />
      <p className="text-white text-base absolute bottom-[20px] left-[50%] -translate-x-[50%]">
        {title}
      </p>
    </div>
  );
};

export default CardKategoriBelajar;
