import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

const Video = () => {
  return (
    <main className="flex justify-center sm:p-6 md:p-8">
      <Card className="w-full max-w-md p-6 shadow-lg bg-lightgray">
        <CardTitle className="mb-2 text-xl font-bold text-center text-black sm:text-2xl">
          How to register?
        </CardTitle>
        <CardDescription className="mb-4 text-lg font-semibold text-center text-black sm:text-xl">
          You enter by direct invitation from a donor of the foundation, the
          initial donation is $312.
        </CardDescription>
        <CardContent className="text-sm text-center text-black sm:text-md">
          <p className="mb-4">
            You need an email address, phone number, a username and password for
            your account.
          </p>
        </CardContent>
        <CardFooter className="mt-6 text-xs text-center text-black sm:text-sm">
          The only requirement is to invite 2 or more people to register, and
          become your guest.
        </CardFooter>
      </Card>
    </main>
  );
};

export default Video;
