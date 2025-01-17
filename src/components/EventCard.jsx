import React from "react";
import { FaArrowRight } from "react-icons/fa";

const EventCard = ({ eventName, image, organizer, brief }) => {
  return (
    <div className="p-6 max-w-sm h-[450px] rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYuMPNTF49Ehvc0lWDbNASnmZDyiY3DtiAA&s"
        alt={`image`}
      />
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Halum</h2>
        <h3 className="text-lg text-gray-700 font-medium mb-4">
          Organized by: Halum
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">Hau Mau Khau</p>
        <div className="flex items-center justify-end text-purple-500 text-[1.2rem] font-medium text-md cursor-pointer hover:underline">
          <span>See Details</span>
          <FaArrowRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
