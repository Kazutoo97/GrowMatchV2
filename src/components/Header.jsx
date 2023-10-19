import React, { useState } from "react";
import ButtonHamburger from "./atoms/ButtonHamburger";
import NavList from "./molecules/NavList";
import NavLogo from "./atoms/NavLogo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[76px] fixed top-0 left-0 w-full bg-white z-[9999] shadow-md">
      <div className="container mx-auto max-w-7xl px-[10%] md:px-[5%] 2xl:px-0 relative">
        <div className="flex items-center justify-between relative py-3 ">
          <NavLogo />
          <div className="flex items-center">
            <ButtonHamburger
              menuOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <NavList menuOpen={menuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
