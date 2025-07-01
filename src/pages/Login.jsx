import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigate("/");
    } catch (error) {
      console.log("Error in Loging in :", error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        New user?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
