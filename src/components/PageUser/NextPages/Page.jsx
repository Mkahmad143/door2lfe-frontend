import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-gray">
      <div className="flex flex-col items-center mt-8 bg-gray text-bar">
        <h2 className="text-2xl font-bold text-center">
          GRUPO DE <span className="text-green-500">DONADORES</span>
        </h2>
        <div className="w-16 h-1 mt-2 underline bg-green-500"></div>
        <div>
          <img src="image1.png" alt="" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Page;
