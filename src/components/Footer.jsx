import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative bg-[#079273] py-[80px] px-8 mt-2 ">
      <div className="flex flex-col items-center justify-center space-y-[80px]">
        <ul className="flex space-x-8 text-white">
          <li>
            <Link>Link One</Link>
          </li>
          <li>
            <Link>Link Two</Link>
          </li>
          <li>
            <Link>Link Three</Link>
          </li>
          <li>
            <Link>Link Four</Link>
          </li>
          <li>
            <Link>Link Five</Link>
          </li>
        </ul>
        <div className="  bg-[#F6F6F6] h-[1px] w-full flex"></div>
      </div>

      <div className="flex items-center justify-center pt-[32px] text-white">
        <ul className="flex space-x-6">
          <li>
            <Link>2023 Relume. All right reserved.</Link>
          </li>
          <li>
            <Link className="underline">Privacy Policy</Link>
          </li>
          <li>
            <Link className="underline">Terms of Service</Link>
          </li>
          <li>
            <Link className="underline">Cookies Settings</Link>
          </li>
        </ul>
      </div>
      <div className="absolute top-[80px] right-[32px] flex space-x-4 text-white">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </section>
  );
};

export default Footer;
