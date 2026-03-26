




import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const userEmail = localStorage.getItem("userEmail");

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">

            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-10 tracking-wide">
                    Student Panel
                </h2>

                <ul className="space-y-4 text-gray-300">
                    <li
                        onClick={() => navigate("/dashboard")}
                        className="bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 cursor-pointer transition"
                    >
                        Dashboard
                    </li>

                    <li
                        onClick={() => navigate("/tasks")}
                        className="px-3 py-2 rounded-lg hover:bg-white/20 cursor-pointer transition"
                    >
                        Tasks
                    </li>

                    <li
                        onClick={() => navigate("/study")}
                        className="px-3 py-2 rounded-lg hover:bg-white/20 cursor-pointer transition"
                    >
                        Study
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">

                {/* Navbar */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                        Welcome back, {userEmail} 👋
                    </h1>

                    <button
                        onClick={() => {
                            localStorage.removeItem("isLoggedIn");
                            navigate("/");
                        }}
                        className="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                    >
                        Logout
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-8">

                    {/* Total Tasks */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-gray-500 text-sm">Total Tasks</h3>
                        <p className="text-3xl font-bold mt-2 text-blue-600">12</p>
                    </div>

                    {/* Completed */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-gray-500 text-sm">Completed Tasks</h3>
                        <p className="text-3xl font-bold mt-2 text-green-600">8</p>
                    </div>

                    {/* Study */}
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-gray-500 text-sm">Study Hours</h3>
                        <p className="text-3xl font-bold mt-2 text-purple-600">5 hrs</p>
                    </div>

                </div>

                {/* Task Section */}
                <div className="mt-10 bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">

                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                        Today's Tasks
                    </h2>

                    <ul className="space-y-4">

                        <li className="flex justify-between items-center bg-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="font-medium text-gray-700">
                                Complete DSA practice
                            </span>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                Done
                            </span>
                        </li>

                        <li className="flex justify-between items-center bg-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="font-medium text-gray-700">
                                Revise OS notes
                            </span>
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                Pending
                            </span>
                        </li>

                        <li className="flex justify-between items-center bg-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                            <span className="font-medium text-gray-700">
                                Work on project
                            </span>
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                Pending
                            </span>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;