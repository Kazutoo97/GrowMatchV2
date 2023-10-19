import React from "react";
import Logo from "../../assets/SVG/Logo";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div>
      <Link to="/">
        <Logo className="w-[140px] md:w-[160px] h-[30px] md:h-[50px] " />
      </Link>
    </div>
  );
};

export default NavLogo;
