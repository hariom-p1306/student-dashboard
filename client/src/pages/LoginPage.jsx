

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://your-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      navigate("/dashboard");

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-80 shadow-2xl">

        <h2 className="text-white text-2xl font-semibold text-center mb-2">
          Welcome back
        </h2>

        <p className="text-gray-300 text-sm text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 text-white p-2 rounded-lg outline-none border border-white/20 focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 text-white p-2 rounded-lg outline-none border border-white/20 focus:ring-2 focus:ring-green-400"
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Login
          </button>
          

        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="underline cursor-pointer"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;