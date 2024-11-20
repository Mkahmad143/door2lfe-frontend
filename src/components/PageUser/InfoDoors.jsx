import React, { useState } from 'react';
import doorsData from '../DataofDoors';
import { Button } from '../ui/button';

const InfoDoors = () => {
  const [selectedDoor, setSelectedDoor] = useState(doorsData[0]);

  const handleClick = (door) => {
    setSelectedDoor(door);
  };

  return (
    <div className="container mx-auto px-4 py-8 shadow-xl max-w-[90%] md:max-w-[80%] lg:max-w-[70%] bg-lightgray rounded-md">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Opening Doors to Life</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-6 mx-auto">
        {doorsData.map((door, index) => (
          <Button
            key={index}
            onClick={() => handleClick(door)}
            className={`text-xs sm:text-sm font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300  p-1
            ${selectedDoor === door ? 'bg-greengrass text-white' : 'bg-slate-800 text-white hover:bg-slate-950'} 
            hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-greengrass focus:outline-none`}
          >
            {door.button}
          </Button>
        ))}
      </div>

      {selectedDoor && (
        <div className="flex flex-col items-center mt-6 p-4 border rounded-lg bg-white shadow-lg text-center mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          <h2 className="text-base md:text-lg lg:text-xl font-bold mb-3">{selectedDoor.button}</h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">{selectedDoor.description}</p>
          <img
            src={selectedDoor.image}
            alt={selectedDoor.button}
            className="w-full sm:w-2/3 lg:w-1/2 rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default InfoDoors;
