import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const loginData = {
    email: email,
    password: password,
  };
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      if (!email || !password) {
        setError("Please Email address or Password");
      } else {
        const response = await axios.post(
          "https://door2life-backend.vercel.app/api/auth/login",
          loginData
        );
        console.log(response);
        const userId = response.data.user._id;
        sessionStorage.setItem("UserId", userId);
        sessionStorage.setItem("username", response.data.user.username);

        const token = sessionStorage.setItem("token", response.data.token);
        setToken(token);
        if (response.status === 200) {
          toast.success("Login Successful", {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 1500);
        }
      }
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
      toast.error("Check Your Email & Password", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-lightgray">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error ? <p className="text-red-600 ">{error}</p> : ""}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error ? <p className="text-red-600 ">{error}</p> : ""}
          </div>

          <button
            type="button"
            onClick={handlelogin}
            className="w-full py-2 mt-4 font-semibold transition duration-300 rounded-lg bg-green hover:bg-darkGreen"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
