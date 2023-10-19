import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import InputPassword from "../components/atoms/InputPassword";
import LabelForm from "../components/atoms/LabelForm";
import ButtonSubmit from "../components/atoms/ButtonSubmit";
import ButtonLink from "../components/atoms/ButtonLink";
import toast from "react-hot-toast";

const ResetPassword = () => {
  let { token } = useParams();
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(false);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(true);
    } else {
      setPasswordType("password");
      setPasswordIcon(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      konfirmasiPassword: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const { password } = data;

      const response = await axios.put(
        "http://localhost:8000/api/v1/reset-password",
        { token, password }
      );

      console.log(response.data.message);
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error.response.message || error.response.data.message);
      toast.error(error.response.message || error.response.data.message);
    }
  };

  return (
    <div className="pt-[74px] h-auto flex justify-center items-center bg-gray-400/20 ">
      <div className="max-w-[32rem] w-full p-8 my-32 bg-white shadow-xl border border-slate-200 rounded-xl">
        <div className="mx-auto w-fit flex flex-col items-center space-y-2 mb-10 ">
          <p className="text-xl font-semibold text-gray-600 ">Reset Password</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-4">
            <LabelForm title="New Password" required="*" />
            <div className="w-full relative">
              <input
                type={passwordType}
                className={`w-full h-10 border-[2px] text-gray-600 pl-4 pr-11 rounded-md text-base outline-none  focus:border-[2px] ${
                  errors.password
                    ? "focus:border-red-500 border-red-500 border-[2px]"
                    : "focus:border-primaryFive border-gray-300"
                }`}
                {...register("password", {
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                    message:
                      "Password must be at least 6 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$%^&*)",
                  },
                  required: { value: true, message: "Password is required" },
                })}
              />
              <InputPassword
                togglePassword={togglePassword}
                passwordIcon={passwordIcon}
              />
            </div>
            {errors.password?.message && (
              <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <LabelForm title="Konfirmasi Password" required="*" />
            <div className="w-full relative">
              <input
                type={passwordType}
                className={`w-full h-10 border-[2px] text-gray-600 pl-4 pr-11 rounded-md text-base outline-none  focus:border-[2px] ${
                  errors.konfirmasiPassword
                    ? "focus:border-red-500 border-red-500 border-[2px]"
                    : "focus:border-primaryFive border-gray-300"
                }`}
                {...register("konfirmasiPassword", {
                  required: {
                    value: true,
                    message: "Konfirmasi Password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Password do not match";
                    }
                  },
                })}
              />
              <InputPassword
                togglePassword={togglePassword}
                passwordIcon={passwordIcon}
              />
            </div>
            {errors.konfirmasiPassword?.message && (
              <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
                {errors.konfirmasiPassword?.message}
              </p>
            )}
          </div>

          <ButtonSubmit
            className="disabled:cursor-not-allowed disabled:bg-primaryFive/30"
            title="Konfirmasi Reset Password"
            type="submit"
            disabled={!isValid}
          />
          <ButtonLink to="/login" title="Batal" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
