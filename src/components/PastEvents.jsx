import React from "react";
import EventCard from "./EventCard";
import { FaArrowRight } from "react-icons/fa";

const PastEvents = () => {
  return (
    <div>
      <h1 className="text-purple-500 border-black border-b-1 shadow mt-8">
        Past Events
        <div className="w-full px-10 py-10 flex flex-wrap ">
          <div className=" bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <EventCard />
              ))}
          </div>
          <div className="w-full flex justify-end items-center text-gray-700 font-medium text-[1.5rem]">
            <div className="flex items-center cursor-pointer hover:underline">
              See more <FaArrowRight />{" "}
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default PastEvents;
