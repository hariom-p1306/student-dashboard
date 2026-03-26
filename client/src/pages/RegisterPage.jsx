// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email.includes("@")) {
//       setError("Enter valid email");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
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

//       alert("User Registered Successfully 🎉");
//       navigate("/");

//     } catch (err) {
//       setError("Server error");
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      
//       <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-80 border border-white/30">
        
//         <h2 className="text-2xl font-bold text-white text-center mb-6">
//           Create Account 🚀
//         </h2>

//         <form onSubmit={handleRegister} className="flex flex-col gap-4">
          
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-2 rounded-lg bg-white/80"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 rounded-lg bg-white/80"
//           />

//           {error && (
//             <p className="text-red-300 text-sm text-center">{error}</p>
//           )}

//           <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
//             Register
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default RegisterPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
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

      alert("Registered Successfully 🚀");
      navigate("/");

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-80 shadow-2xl">

        <h2 className="text-white text-2xl font-semibold text-center mb-2">
          Create Account 🚀
        </h2>

        <p className="text-gray-300 text-sm text-center mb-6">
          Start your journey
        </p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 text-white p-2 rounded-lg outline-none border border-white/20 focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 text-white p-2 rounded-lg outline-none border border-white/20 focus:ring-2 focus:ring-purple-400"
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
            Register
          </button>

        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="underline cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;