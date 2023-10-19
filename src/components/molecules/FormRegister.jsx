import React, { useEffect, useState } from "react";
import ButtonSubmit from "../atoms/ButtonSubmit";
import ButtonLink from "../atoms/ButtonLink";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LabelForm from "../atoms/LabelForm";
import InputPassword from "../atoms/InputPassword";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading } = useSelector(
    (state) => state.Username
  );
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

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      konfirmasiPassword: "",
      dob: "",
      interest: "",
    },
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    dispatch({ type: "REGISTER_PENDING" });

    try {
      const { firstName, lastName, userName, email, password, dob, interest } =
        data;
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        { firstName, lastName, userName, email, password, dob, interest }
      );

      console.log(response.data.data.userName);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: response.data.data.userName,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({ type: "REGISTER_REJECTED" });
      toast.error(error.response.data.message);
      dispatch({ type: "REGISTER_RESET" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4">
        <LabelForm title="First Name" required="*" />
        <div className="w-full">
          <input
            type="text"
            className={`w-full h-10 border-[2px] text-gray-600 px-4 rounded-md text-base outline-none  focus:border-[2px] ${
              errors.firstName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("firstName", {
              required: { value: true, message: "First Name is required" },
            })}
          />
        </div>
        {errors.firstName?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 mb-1 font-medium">
            {errors.firstName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <LabelForm title="Last Name" required="" />
        <div className="w-full">
          <input
            type="text"
            className={`w-full h-10 border-[2px] text-gray-600 px-4 rounded-md text-base outline-none  focus:border-[2px] ${
              errors.lastName
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("lastName", {
              required: { value: false },
            })}
          />
          {errors.lastName?.message && (
            <p className="text-xs text-red-500 mt-[2px] ml-1 mb-1 font-medium">
              {errors.lastName?.message}
            </p>
          )}
        </div>
      </div>

      <div className="w-full mb-4">
        <LabelForm title="Username" required="*" />
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
          <p className="text-xs text-red-500 mt-[2px] ml-1 mb-1 font-medium">
            {errors.userName?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <LabelForm title="Email" required="*" />
        <div className="w-full">
          <input
            type="email"
            className={`w-full h-10 border-[2px] text-gray-600 px-4 rounded-md text-base outline-none  focus:border-[2px] ${
              errors.email
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter a valid email",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>

      <div className="w-full mb-4">
        <LabelForm title="Password" required="*" />
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

      <div className="w-full mb-4">
        <LabelForm title="Date of Birthday" required="*" />
        <div className="w-full relative">
          <input
            type="date"
            className={`w-full h-10 border-[2px] text-gray-600 px-4  rounded-md text-base outline-none  focus:border-[2px] ${
              errors.dob
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("dob", {
              required: {
                value: true,
                message: "DOB is required",
              },
            })}
          />
        </div>
        {errors.dob?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.dob?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <LabelForm title="Interest" required="" />
        <div className="w-full relative">
          <input
            type="text"
            className={`w-full h-10 border-[2px] text-gray-600 px-4  rounded-md text-base outline-none  focus:border-[2px] ${
              errors.interest
                ? "focus:border-red-500 border-red-500 border-[2px]"
                : "focus:border-primaryFive border-gray-300"
            }`}
            {...register("interest", {
              required: {
                value: false,
              },
            })}
          />
        </div>
        {errors.interest?.message && (
          <p className="text-xs text-red-500 mt-[2px] ml-1 font-medium">
            {errors.interest?.message}
          </p>
        )}
      </div>

      <ButtonSubmit
        className="disabled:cursor-not-allowed disabled:bg-primaryFive/30"
        title="Register"
        type="submit"
        disabled={!isValid || isError || isLoading}
      />
      <ButtonLink to="/login" title="Login" />
    </form>
  );
};

export default FormRegister;
