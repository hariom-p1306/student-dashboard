// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     if (!email.includes("@")) {
//       setError("Please enter a valid email");
//       return;
//     }

//     if (password.trim() === "") {
//       setError("Password cannot be empty");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message);
//         return;
//       }

//       // Save login
//       localStorage.setItem("isLoggedIn", "true");

//       // Navigate
//       navigate("/dashboard");

//     } catch (err) {
//       setError("Server error");
//     }
//   };
//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

//       <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80 border border-white/30">

//         <h2 className="text-3xl font-bold text-white text-center mb-2">
//           Welcome Back 👋
//         </h2>

//         <p className="text-center text-white/80 mb-6 text-sm">
//           Login to your dashboard
//         </p>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-2 rounded-lg outline-none bg-white/80 focus:ring-2 focus:ring-purple-400"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 rounded-lg outline-none bg-white/80 focus:ring-2 focus:ring-purple-400"
//           />

//           {/* Error Message */}
//           {error && (
//             <p className="text-red-300 text-sm text-center">{error}</p>
//           )}

//           <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200">
//             Login
//           </button>
//           <p className="text-center text-white text-sm mt-4">
//             Don’t have an account?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="underline cursor-pointer"
//             >
//               Register
//             </span>
//           </p>

//         </form>
//       </div>

//     </div>
//   );
// };

// export default LoginPage;


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
      const res = await fetch("http://localhost:5000/api/auth/login", {
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