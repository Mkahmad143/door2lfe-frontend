import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const AdminPanel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation

  useEffect(() => {
    if (!localStorage.getItem("adminLogin")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen text-gray-100 mt-14 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <header className="p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
            {t("Admin Dashboard")} {/* Translated text */}
          </h1>
          <p className="mt-2 text-lightgray">
            {t("Manage your platform efficiently")} {/* Translated text */}
          </p>
        </header>

        <main className="flex flex-col items-center justify-center flex-1 px-4">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <button
              className="flex flex-col items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
              onClick={() => navigate("/admin/dashboard/user-profile")}
            >
              <span className="text-xl font-bold">{t("User Profiles")}</span>{" "}
              {/* Translated text */}
              <p className="mt-1 text-sm text-gray-200">
                {t("Manage user accounts")}
              </p>{" "}
              {/* Translated text */}
            </button>

            <button
              className="flex flex-col items-center justify-center px-6 py-4 transition transform rounded-lg shadow-lg bg-[#58f5d8] hover:bg-greengrass hover:scale-105 hover:text-white"
              onClick={() => navigate("/admin/dashboard/referrals")}
            >
              <span className="text-xl font-bold">{t("Referrals Tree")}</span>{" "}
              {/* Translated text */}
              <p className="mt-1 text-sm text-gray-200">
                {t("View and manage referrals")}
              </p>{" "}
              {/* Translated text */}
            </button>

            <button
              className="flex flex-col items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
              onClick={() => navigate("/admin/dashboard/mainBank")}
            >
              <span className="text-xl font-bold">{t("Main Bank")}</span>{" "}
              {/* Translated text */}
              <p className="mt-1 text-sm text-gray-200">
                {t("Track finances")}
              </p>{" "}
              {/* Translated text */}
            </button>
            <button
              className="flex flex-col items-center justify-center px-6 py-4 transition transform bg-[#58f5d8] rounded-lg shadow-lg  hover:scale-105"
              onClick={() => navigate("/admin/dashboard/getUser")}
            >
              <span className="text-xl font-bold">{t("See Single User")}</span>{" "}
              {/* Translated text */}
              <p className="mt-1 text-sm text-gray-200">
                {t("Single User Detail")}
              </p>{" "}
              {/* Translated text */}
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
