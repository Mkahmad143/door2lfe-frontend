import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Link } from "react-router-dom";

const SendGifts = ({ requester }) => {
  return (
    <Card className="flex flex-col items-center max-w-md p-6 mx-auto my-8 shadow-lg bg-lightgray">
      <CardTitle className="mb-2 text-xl font-bold text-center sm:text-2xl">
        SEND GIFTS
      </CardTitle>

      <CardDescription className="mb-4 font-semibold text-center text-black">
        This option can be used to send a gift.
      </CardDescription>

      <CardContent className="text-center">
        <p className="mb-4 font-semibold">
          Click on the button to confirm the gift sending.
        </p>
        <div className="flex justify-center">
          <Link to={"/userpage/send-gift"}>
            {" "}
            <Button className="text-sm text-black bg-green hover:bg-darkGreen sm:text-sm">
              SEND GIFT TO <strong>{requester}</strong>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SendGifts;
