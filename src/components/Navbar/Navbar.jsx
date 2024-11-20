import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Translator from "../Language/Translator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/admin/login");
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("Logout Successfully!", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: true,
      theme: "colored",
    });

    sessionStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleAdminLogout = () => {
    toast.info("Logout Successfully!", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: true,
      theme: "colored",
    });
    setTimeout(() => {
      localStorage.removeItem("adminLogin");
      navigate("/admin/login");
    }, 2000);
  };
  return (
    <>
      {localStorage.getItem("adminLogin") ? (
        <nav className="sticky top-0 z-10 flex items-center justify-between w-full p-4 text-white bg-white shadow-md bg-opacity-20 backdrop-blur-md">
          <div className="text-2xl font-bold">Admin Panel</div>
          {localStorage.getItem("adminLogin") ? (
            <button
              onClick={handleAdminLogout}
              className="px-4 py-2 transition bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-2 transition bg-green-500 rounded hover:bg-green-600"
            >
              Login
            </button>
          )}
        </nav>
      ) : (
        <>
          <div className="fixed top-0 left-0 z-20 flex items-center w-full px-6 py-4 bg-white shadow-md bg-opacity-20 backdrop-blur-md">
            <div className="z-20 flex items-center ">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <svg
                    className="relative z-10 w-6 h-6 md:hidden"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="relative z-10 w-6 h-6 md:hidden"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center ">
              <div className="hidden px-4 py-1 transition-colors duration-300 rounded-md hover:bg-lightgreen hover:text-black md:block">
                <Link
                  to="/"
                  className="text-white cursor-pointer hover:text-white"
                >
                  <img src={logo} alt="logo" className="h-6 " />
                </Link>
              </div>

              <Link
                to="/belief"
                className="hidden px-4 py-1 transition-colors duration-300 rounded-md cursor-pointer text-lightgray hover:bg-black hover:text-white md:block"
              >
                BELIEFS
              </Link>

              <Link
                to="/contact"
                className="hidden px-4 py-1 transition-colors duration-300 rounded-md cursor-pointer text-lightgray hover:bg-black hover:text-white md:block"
              >
                CONTACT
              </Link>
              <Link
                to="/faqs"
                className="hidden px-4 py-1 transition-colors duration-300 rounded-md cursor-pointer text-lightgray hover:bg-black hover:text-white md:block"
              >
                FAQs
              </Link>
            </div>

            {sessionStorage.getItem("token") ? (
              <div className="flex items-center space-x-4">
                <Link to="/userpage">
                  <Button>My Account</Button>
                </Link>
                <Link to="/userpage">
                  <Button onClick={handleLogout}>Logout</Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center ml-auto space-x-4">
                <Link to="/login">
                  <Button className="text-black bg-lightgray hover:bg-darkgreen">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            )}

            <div className="hidden ml-6 sm:block">
              <Translator />
            </div>

            {/* Sidebar for Mobile */}
            <div
              className={`${
                isOpen
                  ? "-translate-y-0 top-16 h-max"
                  : "-translate-y-full top-0"
              } rounded-sm w-screen md:w-auto fixed  left-0  transition-transform duration-500 ease-in-out bg-lightgray p-4`}
            >
              <div className="flex flex-col p-2 mt-8 space-y-4 text-center">
                <Link
                  to="/"
                  className="block cursor-pointer text-gray hover:text-gray"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  HOME
                </Link>
                <Link
                  to="/faqs"
                  className="block cursor-pointer text-gray hover:text-gray"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  FAQ's
                </Link>
                <Link
                  to="/belief"
                  className="block cursor-pointer text-gray hover:text-gray"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  READ BELIEFS
                </Link>
                <Link
                  to="/contact"
                  className="block cursor-pointer text-gray hover:text-gray"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  CONTACT
                </Link>
                <Link
                  to="/belief"
                  className="block cursor-pointer text-gray hover:text-gray"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  DONATIONS
                </Link>
              </div>
              <div className="flex justify-center mt-2 md:hidden">
                <Translator />
              </div>
            </div>
          </div>
          <ToastContainer stacked />
        </>
      )}
    </>
  );
};

export default Navbar;
