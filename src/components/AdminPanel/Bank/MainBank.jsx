import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainBank = () => {
  const [balance, setBalance] = useState(0);

  // Simulate fetching bank balance (replace this with an API call if needed)
  useEffect(() => {
    const fetchBalance = async () => {
      // Simulate API response
      const response = await axios.get(
        "https://door2life-backend.vercel.app/api/bank/main-bank"
      );
      const bankAmount = response.data.length * 50;

      setBalance(bankAmount);
    };

    fetchBalance();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Link to={"/admin/dashboard"}>
        <h1 className="top-0 left-0 px-4 py-2 mx-auto text-white bg-blue-600 rounded-lg md:absolute w-max md:mx-16 my-7">
          Go Back
        </h1>
      </Link>
      <div className="w-full max-w-sm rounded-lg shadow-lg bg-lightgray">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Your Bank Balance
          </h1>
          <div className="flex items-center justify-center mt-4">
            <span className="text-4xl font-extrabold text-green-500">
              ${balance.toLocaleString()}
            </span>
          </div>
          <p className="mt-2 text-center text-gray-500">
            Stay on top of your finances with real-time updates.
          </p>
        </div>
        <div className="flex justify-center p-4 border-t rounded-b-lg bg-gray-50">
          <Link to={"/admin/dashboard/mainBank/transactions"}>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              View Transactions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBank;
