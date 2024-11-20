import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Link } from "react-router-dom";
import axios from "axios";

const ReceiveGifts = () => {
  const [data, setData] = useState(null); // Initialize with null for better conditional rendering
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(""); // Track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem("UserId");
        if (!userId) {
          throw new Error("User ID not found in session storage");
        }

        const response = await axios.get(
          `https://door2life-backend.vercel.app/api/user/${userId}`
        );

        if (response.status === 200) {
          setData(response.data || {});
        } else {
          setError(`Failed to load data: ${response.status}`);
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Find the current active door (first door with status 0 or similar logic)
  const currentDoor =
    data?.doorStatus &&
    Object.keys(data.doorStatus).find(
      (door) => data.doorStatus[door] == false // Adjust based on your status logic
    );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <Card className="max-w-md p-6 mx-auto my-8 shadow-lg bg-lightgray">
      <CardTitle className="mb-2 text-xl font-bold text-center sm:text-2xl">
        VIEW MY GIFTS
      </CardTitle>

      <CardDescription className="mb-4 font-semibold text-center text-gray">
        You should complete each one of the Doors in order from 1 to 14.
      </CardDescription>

      <CardContent className="text-center">
        <p className="mb-4 font-semibold">Current Door:</p>
        <Link to={`/userpage/receive-gift`}>
          <Button className="text-xs text-black bg-green hover:bg-darkGreen sm:text-sm">
            {currentDoor ? `DOOR ${currentDoor - 1}` : "ALL DOORS COMPLETED"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ReceiveGifts;
