import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaDoorOpen,
  FaDoorClosed,
  FaQrcode,
  FaCoins,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useTranslation } from "react-i18next"; // Import translation hook

const SingleUserData = () => {
  const [email, setEmail] = useState(""); // Input email state
  const [userData, setUserData] = useState(null); // User data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const { t } = useTranslation(); // Initialize translation hook

  const fetchUserData = async () => {
    if (!email) {
      setError(t("emailRequired"));
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axios.post(
        `https://door2life-backend.vercel.app/api/user/get`,
        {
          email,
        }
      );
      setUserData(response.data);
    } catch (err) {
      setError(t("errorFetchingUserData"));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen p-6 bg-gradient-to-br from-gray-100 to-blue-50">
        <Link to={"/admin/dashboard"}>
          <h1 className="top-0 left-0 px-4 py-2 mx-auto bg-blue-600 rounded-lg md:absolute w-max md:mx-16 my-7">
            Go Back
          </h1>
        </Link>
        <div className="max-w-lg p-8 mx-auto rounded-lg shadow-lg bg-lightgray">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
            {t("searchUserByEmail")}
          </h1>

          {/* Email Input */}
          <div className="flex gap-2 mb-4">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
            <button
              onClick={fetchUserData}
              className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <FaSearch className="mr-2" />
              {t("searchUserByEmail")}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* Loading */}
          {loading && (
            <p className="text-center text-blue-500 animate-bounce">
              {t("loading")}
            </p>
          )}

          {/* User Data */}
          {userData && (
            <div className="mt-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                {userData.username} {t("userProfile")}
              </h2>
              <div className="p-4 mb-4 rounded-lg shadow-md ">
                <p className="flex items-center gap-2 text-gray-600">
                  <FaEnvelope />
                  <strong>{t("email")}:</strong> {userData.email}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaPhone />
                  <strong>{t("phone")}:</strong> {userData.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaQrcode />
                  <strong>{t("referralCode")}:</strong> {userData.referralCode}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaCoins />
                  <strong>{t("donationAmount")}:</strong> ${userData.amount}
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {t("doorStatus")}
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {Object.entries(userData.doorStatus).map(([door, status]) => (
                    <div
                      key={door}
                      className={`flex flex-col items-center p-4 text-center rounded-lg shadow-md ${
                        status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status ? (
                        <FaDoorOpen className="text-2xl" />
                      ) : (
                        <FaDoorClosed className="text-2xl" />
                      )}
                      <p className="mt-2 font-bold">Door {door}</p>
                      <p>{status ? t("open") : t("closed")}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleUserData;
