import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center mt-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-96 p-8 shadow rounded border-1"
      >
        <h2 className="text-xl font-semibold text-center mb-6">Sign in</h2>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-6 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-indigo-700 text-white py-2 rounded">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
