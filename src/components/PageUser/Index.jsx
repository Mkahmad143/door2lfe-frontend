import React, { useEffect, useState } from "react";
import Video from "./Video";
import Register from "./Register";
import WorkGroup from "./WorkGroup";
import ReceiveGifts from "./ReceiveGifts";
import PrintCertificate from "./PrintCertificate";
import InfoOnDon from "./InfoOnDon";
import SendGifts from "./SendGifts";

import InfoDoors from "./InfoDoors";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const DoorPages = () => {
  const doorPages = [
    { name: "Video" },
    { name: "Register" },
    { name: "Work Group" },
    { name: "Receive Gifts" },
    { name: "Send Gifts" },
    { name: "Print Certificate" },
    { name: "Information ON Donations" },
    { name: "Info Doors" },
  ];
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(null);
  const [requester, setRequester] = useState("");

  const userId = sessionStorage.getItem("UserId");
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/Login");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pendingResponse = await axios.get(
          `https://door2life-backend.vercel.app/api/messages/pending-requests/${userId}`
        );
        setRequester(pendingResponse.data[0].requester.username);

        sessionStorage.setItem(
          "requseter",
          pendingResponse.data[0].requester.username
        );
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleClick = (page) => {
    setSelectedPage(page.name);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-16 h-max md:flex-row lg:mx-16">
        {/* Sidebar with fixed width and height */}
        <div className="flex-none w-full p-5 overflow-y-auto bg-gray-200 md:w-60 lg:w-72 h-96 ">
          {doorPages.map((page, index) => (
            <button
              key={index}
              className={`w-full border text-[#bac8d9] p-2 text-left hover:bg-darkGreen hover:text-black ${
                selectedPage === page.name ? "bg-green text-black" : ""
              }`}
              onClick={() => handleClick(page)}
            >
              {page.name}
            </button>
          ))}
        </div>

        {/* Content area that adjusts based on sidebar width */}
        <div className="flex-1 p-5 h-max">
          {selectedPage === "Video" && <Video />}
          {selectedPage === "Register" && <Register />}
          {selectedPage === "Work Group" && <WorkGroup />}
          {selectedPage === "Receive Gifts" && <ReceiveGifts />}
          {selectedPage === "Send Gifts" && <SendGifts requester={requester} />}

          {selectedPage === "Print Certificate" && <PrintCertificate />}
          {selectedPage === "Information ON Donations" && <InfoOnDon />}
          {selectedPage === "Info Doors" && <InfoDoors />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoorPages;
