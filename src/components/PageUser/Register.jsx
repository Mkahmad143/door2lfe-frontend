import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import axios from "axios";
import logo from "/logohombre1.png";
import { CiEdit } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [data, setData] = useState({});
  const [referrals, setReferrals] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem("UserId");
        if (!userId) {
          console.error("No UserId found in sessionStorage.");
          return;
        }
        const res = await axios.get(
          `https://door2life-backend.vercel.app/api/auth/referrals/${userId}`
        );

        if (res.status === 200) {
          setData(res.data.referralTree || {});
          setReferrals(res.data.referralTree?.referrals || []);
        } else {
          console.error("Failed to fetch data, status:", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (referral) => {
    setEditData(referral);
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(editData);
      const { password, ...updateData } = editData; // Separate password from other data
      const res = await axios.patch(
        `https://door2life-backend.vercel.app/api/user/${editData.userId}`,
        updateData
      );

      toast.success("User Updated Successfuly", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setReferrals(
        referrals.map((referral) =>
          referral._id === editData._id
            ? { ...referral, ...updateData }
            : referral
        )
      );
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  return (
    <main className="w-full p-4 rounded-xl bg-slate-200 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-4 rounded-lg sm:grid-cols-2">
        {/* Main User Card */}
        <Card className="flex flex-col items-center justify-center w-full mx-auto text-black bg-white rounded-lg sm:col-span-2 border-gray">
          <CardContent className="flex flex-col items-center gap-2 my-2">
            <img
              src={logo}
              alt={`${data.username || "User"} profile`}
              className="w-12 h-12"
            />
            <CardTitle>{data.username || "User"}</CardTitle>
            <CardDescription className="font-semibold text-black">
              {data.email || "No email provided"}
            </CardDescription>
          </CardContent>
        </Card>

        {referrals.length > 0 ? (
          referrals.map((referral) => (
            <Card
              key={referral._id}
              className="relative flex items-center justify-center text-black rounded-lg bg-slate-200 border-gray"
            >
              <div className="absolute top-0 right-0 flex">
                <CiEdit
                  onClick={() => handleEdit(referral)}
                  className="text-3xl text-blue-600"
                />
              </div>
              <CardContent className="flex flex-col items-center gap-2 my-2">
                <img
                  src={logo}
                  alt={`${referral.username} profile`}
                  className="w-12 h-12"
                />
                <CardTitle>{referral.username || "Unknown"}</CardTitle>
                <CardDescription className="font-semibold text-black">
                  {referral.email || "No email provided"}
                </CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-600">
            No referrals yet.
          </p>
        )}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 bg-white min-w-[18rem] sm:min-w-[25rem] lg:min-w-[30rem]  rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Edit User</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={editData.username || ""}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editData.email || ""}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={editData.password || ""}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter new password"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </main>
  );
};

export default Register;