import React, { useState } from "react";
import { validation } from "../utils/validation";
import { loginUser, signUpUser } from "../utils/authService";
import { toast } from "react-toastify";

const AuthForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [isLogin, setIsLogin] = useState(true); // State to track whether Login or Signup is active
  const [formData, setFormData] = useState(initialState); // store state variable for authform
  const [errors, setErrors] = useState({}); // store manage errors state

  // Handle tab switching between Login and Signup
  const handleLoginCheck = (type) => {
    if (type === "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    // while switching tab clear all states
    setFormData(initialState);
    setErrors({});
  };

  // handle input change/ update when user typing in input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value })); // set values with updated values

    setErrors({ ...errors, [name]: "" }); // removing error while writing
  };

  // here validation function call and return if there is any error
  let resErrors = validation(formData, isLogin);
  let isValid = Object.keys(resErrors)?.length == 0 ? true : false; // check error is there or not

  // after button click check user is valid for signup or login that function logic is here
  const handleAuthButtonClick = (e) => {
    e.preventDefault();

    if (!isValid) {
      // if there is an error so set errors and return so it will not go for signup or login
      setErrors(resErrors);
      return;
    }

    if (isValid && isLogin) {
      // if there is no error and in login tab

      // call loginUser function with formData and return response
      let res = loginUser({
        email: formData?.email,
        password: formData?.password,
      });
      if (res.success) {
        // if res true then it will notify with success message otherwise error message and clear all states
        toast.success(res.message);
        setErrors({});
        setFormData(initialState);
        //  setIsLogin(false);
      } else {
        toast.error(res.message);
      }
    } else if (isValid && !isLogin) {
      // check if no error and in signup tab

      // call signUpUser function and pass formdata to store in localstorage
      let res = signUpUser({
        name: formData?.name,
        email: formData?.email,
        password: formData?.password,
        confirmPassword: formData?.confirmPassword,
      });

      if (res.success) {
        // if res true then it will notify with success message otherwise error message and clear all states
        toast.success(res.message);
        setErrors({});
        setFormData(initialState);
        setIsLogin(true);
      } else {
        toast.error(res.message);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg overflow-hidden mb-6">
          <button
            className={`w-1/2 py-3 font-semibold transition cursor-pointer
      ${
        isLogin
          ? "bg-blue-950 text-white"
          : "bg-gray-100 text-blue-950 hover:bg-gray-200"
      }
    `}
            onClick={() => handleLoginCheck("login")}
          >
            Login
          </button>

          <button
            className={`w-1/2 py-3 font-semibold transition cursor-pointer
      ${
        !isLogin
          ? "bg-blue-950 text-white"
          : "bg-gray-100 text-blue-950 hover:bg-gray-200"
      }
    `}
            onClick={() => handleLoginCheck("signup")}
          >
            SignUp
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-blue-950 mb-6">
          {isLogin ? "Login" : "SignUp"}
        </h2>

        {/* Name */}
        {!isLogin && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData?.name ?? ""}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData?.email ?? ""}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData?.password ?? ""}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Forgot password */}

        {/* {isLogin && (
          <div className="text-right mb-5 -mt-3.5">
            <button
              type="button"
              onClick={() => {
                // handle forgot password logic here
                alert("Forgot password clicked");
              }}
              className="text-sm text-blue-900 hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Forgot password?
            </button>
          </div>
        )} */}

        {!isLogin && (
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter confirm password"
              name="confirmPassword"
              value={formData?.confirmPassword ?? ""}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        {/* Login/SignUp Button */}
        <button
          className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition cursor-pointer"
          onClick={handleAuthButtonClick}
        >
          {isLogin ? "Login" : "SignUp"}
        </button>
        {isLogin ? (
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => handleLoginCheck("signup")}
              className="text-blue-950 font-semibold hover:underline bg-transparent cursor-pointer"
            >
              SignUp
            </button>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => handleLoginCheck("login")}
              className="text-blue-950 font-semibold hover:underline bg-transparent cursor-pointer"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
