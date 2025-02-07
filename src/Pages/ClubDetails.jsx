import React, { useEffect, useState } from "react";
import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ClubDetails = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/clubs/${id}`);
        setClub(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching club details:", error);
        setLoading(false);
        setClub(null); // Set to null on error
      }
    };
    fetchClub();
  }, [id]);

  // DEMO DATA (If no data is fetched)
  const demoClub = {
    name: "Tech Innovators Club",
    tagline: "Creating Future with Innovation",
    banner:
      "https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFja2F0aG9ufGVufDB8fDB8fHww",
    des: "The Tech Innovators Club is a group of passionate individuals exploring new technological advancements through projects, workshops, and hackathons.",
    members: [
      {
        id: 1,
        name: "Alice Johnson",
        role: "President",
        image:
          "https://images.unsplash.com/photo-1610568781018-995405522539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 2,
        name: "Bob Smith",
        role: "Vice President",
        image:
          "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXJoZXJvJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: 3,
        name: "Charlie Brown",
        role: "Secretary",
        image:
          "https://plus.unsplash.com/premium_photo-1731816437401-ee280b1da088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cGVybWFuJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    achievements: [
      "Won National Robotics Championship 2023 🏆",
      "Organized CUET AI Summit 2024 🤖",
      "Developed Smart City App used by 10K+ people 🌍",
    ],
    events: [
      {
        id: 1,
        name: "Hackathon 2024",
        date: "March 20, 2024",
        description: "An exciting coding competition for innovative minds!",
      },
      {
        id: 2,
        name: "Tech Workshop",
        date: "April 10, 2024",
        description: "Learn the latest trends in AI and Machine Learning.",
      },
    ],
  };

  const displayedClub = club || demoClub;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-purple-700 text-white p-6 min-h-screen shadow-lg">
          <h2 className="text-2xl font-bold">{displayedClub.name}</h2>
          <ul className="mt-6 space-y-4">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Members</li>
            <li className="hover:underline cursor-pointer">Achievements</li>
            <li className="hover:underline cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {/* Club Banner */}
          <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={displayedClub.banner}
              alt={displayedClub.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h1 className="text-4xl font-bold">{displayedClub.name}</h1>
              <p className="text-lg italic">{displayedClub.tagline}</p>
            </div>
          </div>

          {/* Club Description */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700">
              About the Club
            </h2>
            <p className="mt-4 text-gray-600">{displayedClub.des}</p>
          </div>

          {/* Members List */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700">Members</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {displayedClub.members.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-100 p-4 rounded-lg text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                  <p className="mt-2 font-bold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
              <FaTrophy className="text-yellow-500" /> Achievements
            </h2>
            <ul className="mt-4 list-disc pl-6 text-gray-600">
              {displayedClub.achievements.map((achievement, index) => (
                <li key={index} className="mt-2">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Club Events */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" /> Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {displayedClub.events.map((event) => (
                <div key={event.id} className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">{event.name}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2 text-gray-500">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClubDetails;
