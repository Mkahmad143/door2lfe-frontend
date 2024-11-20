import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Transactions = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://door2life-backend.vercel.app/api/bank/main-bank"
        );
        if (response.status === 200) {
          setUser(response.data);
        } else {
          setUser([]);
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setUser([]);
      }
    };
    fetchTransactions();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }; // Example: November 14, 2024
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <Link to={"/admin/dashboard/mainBank"}>
        <h1 className="absolute top-0 left-0 px-4 py-2 mx-16 text-white bg-blue-600 rounded-lg my-7">
          Go Back
        </h1>
      </Link>
      <div className="w-full min-h-[50vh] overflow-y-scroll max-w-4xl bg-lightgray rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">
            Recent Transactions
          </h1>
          <p className="text-sm text-gray-500">
            Stay updated with your latest activity
          </p>
        </div>

        {user.length > 0 ? (
          <div className="divide-y">
            {user.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50"
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <FaUserCircle className="w-12 h-12 border rounded-full" />

                  <div>
                    <h3 className="font-bold text-gray-800">{txn.name}</h3>
                    <p className="text-sm text-gray-500">
                      {" "}
                      {formatDate(txn.date)}
                    </p>
                  </div>
                </div>

                {/* Amount Section */}
                <div>
                  <span
                    className={`text-lg font-bold ${
                      txn.amount >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {txn.amount >= 0
                      ? `+$${txn.amount.toFixed(2)}`
                      : `-$${Math.abs(txn.amount).toFixed(2)}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            No transactions available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
