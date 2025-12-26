import React, { useState } from 'react'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    
    const handleLoginCheck = (type) => {
        if (type === 'login')
        {
            setIsLogin(true)
        }
        else
        {
            setIsLogin(false)
        }
}
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
              type="name"
              placeholder="Enter name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Forgot password */}
              {isLogin && <div className="text-right mb-5">
                  <a href="#" className="text-sm text-blue-900 hover:underline">
                      Forgot password?
                  </a>
              </div>}

              {!isLogin && <div className="mb-5">
                  <input
                      type="password"
                      placeholder="Enter confirm password"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
              </div>}

        {/* Login Button */}
        <button className="w-full bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition cursor-pointer">
          {isLogin ? "Login" : "Sign up"}
        </button>
        {isLogin ? (
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-blue-950 font-semibold hover:underline cursor-pointer"
              onClick={() => handleLoginCheck("signup")}
            >
              Sign Up
            </a>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="#"
              className="text-blue-950 font-semibold hover:underline cursor-pointer"
              onClick={() => handleLoginCheck("login")}
            >
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;