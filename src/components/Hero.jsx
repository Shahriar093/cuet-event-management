import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClubCard from "./ClubCard";
import EventCard from "./EventCard";

const Hero = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:2000/allclubs");
        setClubs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full p-10 bg-gradient-to-br from-purple-100 to-blue-50">
      {/* Hero Image */}
      <div className="w-full flex justify-center">
        <img
          src="/hero.png"
          alt="hero"
          className="max-w-4xl w-full object-contain"
        />
      </div>

      {/* Welcome Text */}
      <div className="text-center mt-6">
        <p className="text-5xl font-extrabold text-gray-800">Welcome to</p>
        <p className="text-6xl font-extrabold text-purple-700">
          Clubs Event Portal - Event{" "}
          <span className="text-purple-500">Hive</span> of CUET
        </p>
      </div>

      {/* Clubs Section */}
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-purple-600 border-b-2 border-gray-300 pb-3 text-center">
          Our Clubs
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {clubs.length > 0 ? (
            clubs.map((club) => (
              <div
                key={club._id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
                onClick={() => navigate("/clubdetails")}
              >
                {/* Club Image */}
                <div className="relative">
                  <img
                    src={club.imglink}
                    alt={club.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 text-sm rounded-lg">
                    <FaUsers className="inline-block mr-1" /> {club.members}{" "}
                    Members
                  </div>
                </div>

                {/* Club Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400" /> {club.name}
                  </h2>
                  <p className="text-sm italic text-gray-500">{club.tagline}</p>
                  <p className="mt-3 text-gray-700">{club.des}</p>

                  {/* Club Stats */}
                  <div className="mt-4 flex justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-500" />
                      <span>Events: {club.events}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-blue-500" />
                      <span>Members: {club.members}</span>
                    </div>
                  </div>

                  {/* Join Club Button */}
                  <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                    Join Club
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-3">
              No clubs found.
            </p>
          )}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-purple-600 border-b-2 border-gray-300 pb-3 text-center">
          Upcoming Events
        </h1>

        <div className="mt-10 px-10">
          <div className="bg-gray-100 flex flex-wrap justify-center gap-6 p-6 rounded-xl shadow-lg">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <EventCard key={i} />
              ))}
          </div>

          {/* See More Events */}
          <div className="w-full flex justify-end items-center text-gray-700 font-medium text-xl mt-6">
            <div
              onClick={() => navigate("/event")}
              className="flex items-center cursor-pointer hover:underline"
            >
              See more <FaArrowRight className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
