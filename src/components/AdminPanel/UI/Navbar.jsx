import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/login");
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
    }, 1500);
  };
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between w-full p-4 text-white bg-white shadow-md lg:px-16 bg-opacity-20 backdrop-blur-md">
      <div className="text-2xl font-bold">Admin Panel</div>
      {localStorage.getItem("adminLogin") ? (
        <button
          onClick={handleAdminLogout}
          className="px-4 py-2 ml-auto transition bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 ml-auto text-black transition rounded bg-green hover:bg-darkGreen"
        >
          Login
        </button>
      )}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
