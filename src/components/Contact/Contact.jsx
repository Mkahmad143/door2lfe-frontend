import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-6 mt-10 bg-gray-400 ">
        {" "}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 p-6 rounded-xl lg:grid-cols-2 bg-lightgray">
          <div className="flex flex-col gap-2 ">
            <div className="space-y-8">
              <div className="text-3xl font-bold text-gray-800">
                “We’re here to help you”
              </div>
            </div>
            <main className="flex flex-col gap-3 my-auto">
              <div className="text-gray-700 mail">
                <div className="mb-2 text-lg font-bold ">Mail</div>
                <div className="text">contact@openingdoorstolife.org</div>
              </div>
              <div className="text-gray-700 address">
                <div className="mb-2 text-lg font-bold ">Address</div>
                <div className="text">
                  {" "}
                  3693 NW 8th Ave, Okeechobee, FL 34972
                </div>
              </div>
              <div className="text-gray-700 phone">
                <div className="mb-2 text-lg font-bold ">Phone</div>
                <div className="text">(863) 623-4220 (Oficina)</div>
              </div>
              <div className="text-gray-700 phone">
                <div className="mb-2 text-lg font-bold ">Service</div>
                <div className="text"> 24/7 Service</div>
              </div>
            </main>
          </div>
          {/* Row  2*/}
          <div className="w-full space-y-6 rounded-lg bg-gray-50 shadow-inner-2xl ">
            <div>
              <input
                placeholder="Enter your Name "
                className="w-full p-2 border rounded-md "
              />
            </div>
            <div>
              <input
                placeholder="Phone Number "
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <input
                placeholder="Enter your email "
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Comments and Questions  "
                className="w-full p-2 border rounded-md "
                rows="4"
              />
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
