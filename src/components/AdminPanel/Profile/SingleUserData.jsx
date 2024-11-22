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
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleUserData = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const { t } = useTranslation();

  // Fetch user data
  const fetchUserData = async () => {
    if (!email) {
      setError(t("emailRequired"));
      toast.error(t("emailRequired"));
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
      toast.error(t("errorFetchingUserData"));
    } finally {
      setLoading(false);
    }
  };

  // Handle edit button click
  const handleEdit = () => {
    if (!userData) return;
    setEditFormData({
      username: userData.username || "",
      email: userData.email || "",
      password: "",
      phone: userData.phone || "",
    });
    setEditPopup(true);
  };

  // Submit edited data
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.patch(
        `https://door2life-backend.vercel.app/api/user/${userData._id}`,
        {
          ...editFormData,
        }
      );
      setUserData(response.data);
      toast.success(t("userUpdated"));
      setEditPopup(false);
    } catch (err) {
      setError(t("errorUpdatingUser"));
      toast.error(t("errorUpdatingUser"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={1000} />
      <div className="relative min-h-screen p-6 bg-gradient-to-br from-gray-100 to-blue-50">
        <Link to={"/admin/dashboard"}>
          <h1 className="top-0 left-0 px-4 py-2 mx-auto bg-blue-600 rounded-lg md:absolute w-max md:mx-16 my-7">
            {t("goBack")}
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
              {t("searchUser")}
            </button>
          </div>

          {/* Loading */}
          {loading && (
            <p className="text-center text-blue-500 animate-bounce">
              {t("loading")}
            </p>
          )}

          {/* User Data */}
          {userData && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">
                  {userData.username} {t("userProfile")}
                </h2>
                <button
                  onClick={handleEdit}
                  className="p-2 text-white bg-yellow-500 rounded-full hover:bg-yellow-600"
                >
                  <FaEdit />
                </button>
              </div>

              <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
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

              {/* Door Status */}
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  {t("doorStatus")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.doorStatus &&
                    Object.entries(userData.doorStatus).map(
                      ([door, status]) => (
                        <div
                          key={door}
                          className={`flex items-center justify-between p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${
                            status
                              ? "bg-darkGreen text-white"
                              : "bg-red-50 text-red-700"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {status ? (
                              <FaDoorOpen className="text-2xl" />
                            ) : (
                              <FaDoorClosed className="text-2xl" />
                            )}
                            <p className="font-bold">
                              {t("door")} {door}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            {status ? t("open") : t("closed")}
                          </p>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Popup */}
      {editPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <form
            onSubmit={handleEditSubmit}
            className="relative p-6 rounded-lg shadow-lg bg-lightgray animate-scaleUp"
          >
            <h3 className="mb-4 text-xl font-semibold text-center">
              {t("editUserDetails")}
            </h3>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder={t("username")}
                value={editFormData.username}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, username: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder={t("email")}
                value={editFormData.email}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, email: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder={t("password")}
                value={editFormData.password}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, password: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder={t("phone")}
                value={editFormData.phone}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, phone: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setEditPopup(false)}
                className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                {t("saveChanges")}
              </button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleUserData;
