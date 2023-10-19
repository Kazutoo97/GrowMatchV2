import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <section className="mt-[3rem] ">
      <div className="px-4 xl:max-w-6xl lg:max-w-4xl lg:px-0 mx-auto">
        <div className="flex space-x-4">
          <div className="w-1/2 bg-[#CBF9DC] text-[#4BC287] rounded-md shadow-lg">
            <button
              type="button"
              className="flex items-center justify-between w-full py-4 px-8 cursor-pointer"
            >
              Kategori
              <FaChevronDown />
            </button>
          </div>
          <div className="w-1/2 flex ">
            <div className="flex items-center justify-between w-full bg-[#CBF9DC] rounded-md shadow-lg">
              <input
                type="text"
                placeholder="Nama Pengguna"
                className="w-full px-8 py-4 bg-transparent focus:rounded-md placeholder:text-[#4BC287]"
              />
              <span className="py-4 px-8 cursor-pointer">
                <AiOutlineSearch className="h-5 w-5 text-[#4BC287]" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-6">
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center space-x-2 bg-slate-100 px-2 py-1 rounded-sm cursor-pointer shadow-sm">
              <AiOutlineSearch />
              <p className="font-semibold text-xs">FrontEnd Developer</p>
            </div>
            <div className="flex items-center space-x-2 bg-slate-100 px-2 py-1 rounded-sm cursor-pointer shadow-sm">
              <AiOutlineSearch />
              <p className="font-semibold text-xs">FrontEnd Developer</p>
            </div>
            <div className="flex items-center space-x-2 bg-slate-100 px-2 py-1 rounded-sm cursor-pointer shadow-sm">
              <AiOutlineSearch />
              <p className="font-semibold text-xs">FrontEnd Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
