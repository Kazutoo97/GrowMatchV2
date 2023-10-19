import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonSubmit from "../atoms/ButtonSubmit";
import InputPassword from "../atoms/InputPassword";
import ButtonLink from "../atoms/ButtonLink";
import ForgotPassword from "../atoms/ForgotPassword";
import { useForm } from "react-hook-form";
import LabelForm from "../atoms/LabelForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../libs/axios";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, user, isLoading } = useSelector(
    (state) => state.Auth
  );
  const { registerUserName } = useSelector((state) => state.Username);
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
  } = useForm({
    defaultValues: {
      userName: registerUserName || "",
      password: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch({ type: "LOGIN_RESET" });
  }, [isError, dispatch, isSuccess, user, navigate]);

  const onSubmit = async (data) => {
    dispatch({ type: "LOGIN_PENDING" });

    const { userName, password } = data;

    try {
      const response = await axiosInstance.post("api/v1/auth/login", {
        userName,
        password,
      });
      console.log(response.data);
      const { token } = response.data.data;
      localStorage.setItem("user", JSON.stringify(token));
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "LOGIN_REJECTED", payload: error.response.data });
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`w-full`}>
        <LabelForm title="Username" />
        <div className="w-full">
          <input
            type="text"
            className={`w-full h-10 border-[2px] text-gray-600 px-4 rounded-md text-base outline-none  focus:border-[2px] ${
              errors.userName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("userName", {
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                message:
                  "Username must be at least 6 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (!@#$%^&*)",
              },
              required: { value: true, message: "Username is required" },
            })}
          />
        </div>
        {errors.userName?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.userName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-6">
        <LabelForm title="Password" />
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

      <ForgotPassword to="/forgot-password" />
      <ButtonSubmit
        className="disabled:cursor-not-allowed disabled:bg-primaryFive/30"
        title="Login"
        type="submit"
        disabled={!isValid || isError || isLoading}
      />
      <ButtonLink to="/register" title="Daftar" />
    </form>
  );
};

export default FormLogin;
