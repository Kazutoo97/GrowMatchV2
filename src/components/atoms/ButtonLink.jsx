import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="inline-flex justify-center items-center mt-2 w-full h-11 text-primaryFive font-semibold text-base hover:text-white hover:bg-primaryFive/30 border-[2px] border-primaryFive transition duration-300 outline-none rounded-md  "
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
