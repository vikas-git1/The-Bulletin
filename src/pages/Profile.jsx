import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h1>
      <h2 className="text-lg mb-4 text-gray-600">
        Name: {userProfile.firstName}
      </h2>
      <button
        onClick={handleLogOut}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
