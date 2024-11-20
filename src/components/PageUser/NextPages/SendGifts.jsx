import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdDone } from "react-icons/md";
import { FiFrown } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [data, setData] = useState([]);
  const [door, setDoor] = useState({});
  const username = sessionStorage.getItem("username");
  const userId = sessionStorage.getItem("UserId");

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://door2life-backend.vercel.app/api/messages/payment-requests/${userId}`
        );
        console.log(response.data);
        if (response.status === 200) {
          setData(response.data);
          setDoor(response.data[0].recipient.doorStatus);
        }
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);
  const currentDoor =
    (door &&
      Object.entries(door).find(([key, value]) => value === false)?.[0]) ||
    null;

  // Format the door for display
  const formattedDoor = currentDoor
    ? `Door ${currentDoor}`
    : "All doors unlocked";
  const handleSend = async (id) => {
    try {
      const editData = {
        requesterId: userId,
        recipientId: id,
      };
      console.log(editData);
      const response = await axios.patch(
        `https://door2life-backend.vercel.app/api/messages/payment-requests/${id}`,
        editData
      );
      toast.success("Successfully Marked as Paid", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error("Already Marked as Paid", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteData = {
        requestId: id,
        requesterId: userId,
      };

      const response = await axios.delete(
        `https://door2life-backend.vercel.app/api/messages/delete-payment-request`,
        {
          data: deleteData, // Correct way to send data in DELETE requests
        }
      );

      console.log(response);
      if (response.status === 200) {
        toast.success("Payment request deleted successfully", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        // Update the UI by removing the deleted request
        setData((prevData) => prevData.filter((req) => req._id !== id));
      }
    } catch (error) {
      console.log(error);
      alert("Failed to delete payment request");
    }
  };

  return (
    <main className="min-h-screen relative w-screen max-w-[80vw] mx-auto  pt-[5rem]">
      <Link to={"/userpage"}>
        <h1 className="absolute left-0 px-4 py-2 mx-16 text-white bg-blue-600 rounded-lg my-7">
          Go Back
        </h1>
      </Link>
      <h2 className="mt-10 text-3xl font-bold text-center text-lightgray">
        Gifts To Receive{" "}
      </h2>
      <div className="flex flex-wrap w-full gap-6 my-16 mt-16">
        {data.length > 0 ? (
          data.map((req, index) => (
            <Card
              key={index}
              className="mx-auto text-center bg-lightgray size-60 aspect-square"
            >
              <CardHeader>Request {index + 1}</CardHeader>

              <CardContent className="flex flex-col gap-2 -mt-2">
                <CardTitle>To : {req.recipient.username}</CardTitle>
                <CardTitle>{req.recipient.email}</CardTitle>

                <CardDescription className=" text-gray">
                  Amount : ${req.amount}
                </CardDescription>
                <CardDescription
                  className={
                    req.status == "pending"
                      ? "bg-red-500 text-red-600  mx-auto rounded-lg  w-max px-2 bg-opacity-20  uppercase"
                      : "bg-greengrass text-black  mx-auto rounded-lg  w-max px-2 bg-opacity-60  uppercase"
                  }
                >
                  {req.status}
                </CardDescription>
                <CardDescription className=" text-gray">
                  <strong>{formattedDoor}</strong>
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center gap-4 -mt-4">
                <MdDone
                  onClick={() => handleSend(req.recipient._id)}
                  className="p-1 text-4xl text-black transition-all rounded-lg cursor-pointer hover:scale-75 hover:bg-green "
                />
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="flex items-center mx-auto text-white bg-gray-800 min-w-screen">
            <div className="w-full max-w-sm p-6 text-center bg-gray-900 rounded-lg shadow-lg">
              <FiFrown className="mx-auto mb-4 text-6xl text-yellow-400 animate-bounce" />
              <h1 className="mb-4 text-3xl font-semibold text-gray-200">
                No Request Found
              </h1>
              <p className="text-lg text-gray-400">
                It seems like there are no requests at the moment. Please check
                back later.
              </p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer stacked />
    </main>
  );
};

export default Page2;
