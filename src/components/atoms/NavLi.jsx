import React from "react";
import { Link } from "react-router-dom";

const NavLi = ({ title, to }) => {
  return (
    <li className=" hover:bg-primarySeven hover:text-white md:hover:bg-transparent">
      <Link
        to={to}
        className="text-base mx-8 py-2 flex md:mx-0 md:py-0 md:hover:text-primarySeven transition duration-300"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLi;
