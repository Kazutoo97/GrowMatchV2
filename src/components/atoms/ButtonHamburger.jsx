import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

const ButtonHamburger = ({ menuOpen, ...rest }) => {
  return (
    <button type="button" className="py-2 md:hidden" {...rest}>
      {menuOpen ? (
        <BiX className="h-7 w-7 text-primarySeven" />
      ) : (
        <BiMenu className="h-7 w-7 text-primarySeven" />
      )}
    </button>
  );
};

export default ButtonHamburger;
