import React from "react";

const DonationAndDoorStatus = ({ donationAmount, doorStatus, bankAmount }) => {
  const doors = Object.keys(doorStatus).map((door) => ({
    door: `Door #${door}`,
    unlocked: doorStatus[door],
  }));

  return (
    <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
        Your Progress
      </h2>

      {/* Donation Amount Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-600">Total Donations</h3>
        <p className="mt-2 text-3xl font-bold text-green-600">
          ${bankAmount.length * 50}
        </p>
      </div>

      {/* Door Status Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-600">Door Status</h3>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
          {doors.map((door, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border rounded-lg ${
                door.unlocked ? "bg-green-50 border-green-300" : "bg-gray-100"
              }`}
            >
              <span
                className={`mr-4 text-2xl ${
                  door.unlocked ? "text-green-500" : "text-gray-500"
                }`}
              >
                {door.unlocked ? "✔️" : "🔒"}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">{door.door}</p>
                <p
                  className={`text-sm ${
                    door.unlocked ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {door.unlocked ? "Unlocked" : "Locked"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationAndDoorStatus;