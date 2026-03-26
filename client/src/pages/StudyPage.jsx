 import React from "react";

const StudyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-8">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Study Tracker 📚
      </h1>

      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/40">

        <div className="space-y-4">
          <p className="text-gray-700">Today Study Hours: <span className="font-bold">5 hrs</span></p>
          <p className="text-gray-700">Goal: <span className="font-bold">8 hrs</span></p>
        </div>

      </div>

    </div>
  );
};

export default StudyPage;