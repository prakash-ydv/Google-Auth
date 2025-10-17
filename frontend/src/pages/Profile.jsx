import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="bg-white shadow-md p-6 w-52 h-52 rounded-full"></div>

      <h1 className="text-2xl font-bold text-white">Hello {"USER"} 👋</h1>

      <button
        onClick={() => navigate("/")}
        className="h-8 w-20 p-2 rounded-lg flex items-center justify-center bg-red-500 text-white font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
