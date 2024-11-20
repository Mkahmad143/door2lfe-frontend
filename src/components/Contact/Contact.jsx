import React from "react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center
    bg-gray-400 p-6 mt-10
    "
    >
      {" "}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 bg-lightgray w-full 
      p-10 rounded-sm gap-4
      
      max-w-4xl"
      >
        <div className="  flex flex-col gap-2">
          <div className="space-y-8">
            <div className="font-bold text-3xl text-gray-800">
              “We’re here to help you”
            </div>
          </div>
          <main className="my-auto flex flex-col gap-3">
            <div className="mail   text-gray-700">
              <div className=" text-lg font-bold mb-2">Mail</div>
              <div className="text">contact@openingdoorstolife.org</div>
            </div>
            <div className="address  text-gray-700">
              <div className=" text-lg font-bold mb-2">Address</div>
              <div className="text"> 3693 NW 8th Ave, Okeechobee, FL 34972</div>
            </div>
            <div className="phone   text-gray-700">
              <div className=" text-lg font-bold mb-2">Phone</div>
              <div className="text">(863) 623-4220 (Oficina)</div>
            </div>
            <div className="phone  text-gray-700">
              <div className=" text-lg font-bold mb-2">Service</div>
              <div className="text"> 24/7 Service</div>
            </div>
          </main>
        </div>
        {/* Row  2*/}
        <div className="bg-gray-50 rounded-lg p-6 space-y-6 shadow-inner-2xl  w-full ">
          <div>
            <input
              placeholder="Enter your Name "
              className=" border p-2 rounded-md  w-full"
            />
          </div>
          <div>
            <input
              placeholder="Phone Number "
              className="border  rounded-md p-2 w-full"
            />
          </div>
          <div>
            <input
              placeholder="Enter your email "
              className="border p-2 w-full  rounded-md"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Comments and Questions  "
              className=" w-full p-2  rounded-md border"
              rows="4"
            />
          </div>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
