import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiFrown } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const ReceviceGiftsFromOwner = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [door, setDoor] = useState({});
  const userId = sessionStorage.getItem("UserId");

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pendingResponse = await axios.get(
          `https://door2life-backend.vercel.app/api/messages/pending-requests/${userId}`
        );

        if (pendingResponse.status === 200) {
          setPendingRequests(pendingResponse.data);
          setDoor(pendingResponse.data[0]?.requester?.doorStatus || {});
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchData();
  }, [userId]);

  // Find the first locked door (key with value `false`)
  const currentDoor =
    (door &&
      Object.entries(door).find(([key, value]) => value === false)?.[0]) ||
    null;

  // Format the door for display
  const formattedDoor = currentDoor
    ? ` ${currentDoor - 1}`
    : "All doors unlocked";

  return (
    <main className="min-h-screen relative w-screen max-w-[80vw] mx-auto pt-[5rem] md:pt-[8rem]">
      <Link to={"/userpage"}>
        <h1 className="left-0 px-4 py-2 mx-auto text-white bg-blue-600 rounded-lg md:mx-16 w-max md:absolute md:m-0 my-7">
          Go Back
        </h1>
      </Link>
      <h2 className="mb-8 text-4xl font-bold text-center text-lightgray">
        Manage Your Gifts and Payments
      </h2>

      <section className="my-16 ">
        <h3 className="mb-4 text-2xl font-bold text-lightgray">
          Pending Requests
        </h3>
        <div className="flex flex-wrap gap-6 my-16">
          {pendingRequests.length > 0 ? (
            pendingRequests.map((req, index) => (
              <Card
                key={req._id}
                className="mx-auto text-center bg-lightgray w-80"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Request {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-colgap-2">
                  <table className="w-full table-auto">
                    <tbody>
                      <tr>
                        <td className="font-semibold">From:</td>
                        <td>{req.requester?.username}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Email:</td>
                        <td>{req.requester?.email}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Phone#:</td>
                        <td>{req.requester?.phone}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Amount:</td>
                        <td>
                          <strong>${req.amount}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Door:</td>
                        <td>
                          <strong>{formattedDoor}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
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
                  It seems like there are no requests at the moment. Please
                  check back later.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ReceviceGiftsFromOwner;
