import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLogin")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen text-gray-100 mt-14 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-lightgray">Manage your platform efficiently</p>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <button
            className="flex flex-col items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
            onClick={() => navigate("/admin/dashboard/user-profile")}
          >
            <span className="text-xl font-bold">User Profiles</span>
            <p className="mt-1 text-sm text-gray-200">Manage user accounts</p>
          </button>

          <button
            className="flex flex-col items-center justify-center px-6 py-4 transition transform rounded-lg shadow-lg bg-[#58f5d8] hover:bg-greengrass hover:scale-105 hover:text-white"
            onClick={() => navigate("/admin/dashboard/referrals")}
          >
            <span className="text-xl font-bold">Referrals Tree</span>
            <p className="mt-1 text-sm text-gray-200">
              View and manage referrals
            </p>
          </button>

          <button
            className="flex flex-col items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
            onClick={() => navigate("/admin/dashboard/mainBank")}
          >
            <span className="text-xl font-bold">Main Bank</span>
            <p className="mt-1 text-sm text-gray-200">Track finances</p>
          </button>
          <button
            className="flex flex-col   items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
            onClick={() => navigate("/admin/dashboard/getUser")}
          >
            <span className="text-xl font-bold">See Single User</span>
            <p className="mt-1 text-sm text-gray-200">Single User Detail</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
