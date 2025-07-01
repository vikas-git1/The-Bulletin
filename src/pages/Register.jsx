import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: userName,
          lastName: userLastName,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Register
      </h2>
      <form className="space-y-4" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          onChange={(e) => setUserLastName(e.target.value)}
        />
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
          Register
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already Registered?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
