import React from 'react';
import donationData from '../DataofDon';
import { Card, CardContent, CardTitle, CardFooter } from '../ui/card';

const InfoOnDon = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg bg-lightgray">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-8">
        INFORMATION ON DONATIONS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donationData.map((item, index) => (
          <Card
            key={index}
            className="bg-white flex flex-col border-3 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="text-grassGreen text-xl font-bold text-center mb-2">
                {item.title}
              </CardTitle>
              <div className="w-16 h-1 bg-grassGreen mx-auto mb-4"></div>
              <p className="text-gray-700 text-center">
                {item.description}
              </p>
            </CardContent>
            <CardFooter className="text-center p-4 mt-auto">
              <button className="bg-grassGreen text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InfoOnDon;
