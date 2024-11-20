import React from 'react';
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '../ui/card';

const Video = () => {
  return (
    <main className="flex justify-center p-4 sm:p-6 md:p-8">
      <Card className="p-6 max-w-md w-full shadow-lg bg-lightgray">
        <CardTitle className="text-xl sm:text-2xl font-bold text-black text-center mb-2">
          How to register?
        </CardTitle>
        <CardDescription className="text-center mb-4 text-lg sm:text-xl text-black font-semibold">
          You enter by direct invitation from a donor of the foundation, the initial donation is $312.
        </CardDescription>
        <CardContent className="text-center text-sm sm:text-md text-black">
          <p className="mb-4">You need an email address, phone number, a username and password for your account.</p>
        </CardContent>
        <CardFooter className="text-center mt-6 text-xs sm:text-sm text-black">
          The only requirement is to invite 2 or more people to register, and become your guest.
        </CardFooter>
      </Card>
    </main>
  );
};

export default Video;
