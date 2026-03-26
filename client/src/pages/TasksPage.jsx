import React from "react";

const TasksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-8">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Tasks Management 📋
      </h1>

      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">

        <ul className="space-y-4">

          <li className="flex justify-between items-center bg-white/60 p-4 rounded-xl shadow-sm">
            <span>Complete DSA practice</span>
            <span className="text-green-600 font-medium">Done</span>
          </li>

          <li className="flex justify-between items-center bg-white/60 p-4 rounded-xl shadow-sm">
            <span>Revise OS notes</span>
            <span className="text-yellow-600 font-medium">Pending</span>
          </li>

        </ul>

      </div>

    </div>
  );
};

export default TasksPage;