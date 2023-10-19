import React from "react";
import Logo from "../assets/SVG/Logo";
import FormRegister from "../components/molecules/FormRegister";

const Register = () => {
  return (
    <div className="pt-[74px] h-auto flex justify-center items-center bg-gray-400/20 ">
      <div className="max-w-[32rem] w-full p-8 my-32 bg-white shadow-xl border border-slate-200 rounded-xl">
        <div className="mx-auto w-fit flex flex-col items-center space-y-2 mb-10 ">
          <Logo className="w-[150px]" />
          <p className="text-sm font-medium text-gray-500 ">
            Ayoo, cari teman baru dan belajar bersama.
          </p>
        </div>

        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
