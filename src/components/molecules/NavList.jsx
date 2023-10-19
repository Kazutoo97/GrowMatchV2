import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLi from "../atoms/NavLi";
import { useDispatch, useSelector } from "react-redux";
import Images from "../../assets";
import axios from "axios";

const NavList = ({ menuOpen }) => {
  const dispatch = useDispatch();
  const [dropdownUser, setDropdownUser] = useState(false);
  const { user } = useSelector((state) => state.Auth);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setDropdownUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "http://localhost:8000/api/v1/auth/logout"
      );
      console.log(response.data.message);
      setDropdownUser(false);
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      console.log(error.response.message);
    }
  };

  return (
    <nav className="flex justify-between items-center space-x-6 ">
      <div className="md:flex hidden">
        <ul className="block text-primaryFive font-medium md:flex md:space-x-6 items-center justify-center py-2 md:py-0">
          <NavLi to="/" title="Home" />
          <NavLi to="/about" title="About Us" />
        </ul>
      </div>

      <div className="sidebar relative">
        {user ? (
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex justify-center items-center h-10 px-3 min-w-[2.5rem] w-auto rounded-md active:bg-gray-700/30
            focus:shadow-[rgba(0,0,0,0.15)_0px_0px_0px_3px] "
            onClick={() => setDropdownUser(!dropdownUser)}
          >
            <span className="flex items-center justify-center">
              <span className="inline-flex justify-center items-center w-6 h-6">
                <img
                  src={Images.Avatar}
                  alt="Avatar"
                  className="max-w-full w-full h-full object-cover rounded-full"
                />
              </span>
              <span className="inline-block ml-3 font-500 text-base leading-[21px] -mt-[2px] text-gray-600">
                Kirigaya
              </span>
            </span>
          </button>
        ) : (
          <Link
            to="/login"
            className="flex justify-center items-center h-10 w-24 text-white text-base font-semibold bg-primaryFive rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] hover:bg-primarySeven transition duration-300"
          >
            Login
          </Link>
        )}

        {dropdownUser && (
          <div
            ref={dropdownRef}
            className="absolute max-w-fit top-12 right-0 shadow-lg z-99 transition-all duration-700 "
          >
            <div className="py-2 min-w-[14rem] rounded-md border bg-white ">
              <div className="flex items-center px-3 py-2">
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full">
                  <img
                    src={Images.Avatar}
                    alt="Avaatar"
                    className="max-w-full h-full w-full rounded-full object-cover"
                  />
                </span>
                <p className="ml-3 text-sm text-gray-600 text-start font-medium w-[calc(100%-3rem)]">
                  Kirigaya Kazutoo
                </p>
              </div>
              <hr className="border-[rgba(0,0,0,0.09)] rounded-e-md my-2" />

              <Link to="/profile" className="">
                <p className="flex w-full leading-none text-start px-4 py-2 text-base text-gray-600 font-medium hover:bg-gray-400/25">
                  Profile
                </p>
              </Link>
              <button
                type="button"
                className="inline-flex w-full leading-none text-start px-4 py-2 text-base text-gray-600 font-medium hover:bg-gray-400/25"
                onClick={onClick}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavList;
