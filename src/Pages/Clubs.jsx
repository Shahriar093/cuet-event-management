import React from "react";
import { FaLightbulb } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      image: "club1.jpg",
      title: "Club 1",
      tagline: "Inspiring innovation and creativity",
      description:
        "Club 1 is dedicated to fostering an environment of creativity and collaboration among students. We organize events, workshops, and competitions.",
    },
    {
      id: 2,
      image: "club2.jpg",
      title: "Club 2",
      tagline: "Empowering young minds",
      description:
        "Club 2 focuses on professional development and mentorship, helping students achieve their goals through events and community building.",
    },
    {
      id: 3,
      image: "club3.jpg",
      title: "Club 3",
      tagline: "Exploring endless possibilities",
      description:
        "Club 3 is the hub for exploration and innovation. Join us for tech talks, hands-on projects, and exciting challenges.",
    },
    // Add 9 more clubs here
  ];

  return (
    <div>
      <div className="w-full flex justify-center items-center border-black border-b-1 shadow">
        <Header />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQF4SmVwaI-1jA/company-logo_200_200/company-logo_200_200/0/1630460310825?e=2147483647&v=beta&t=88YSoYDjs0oo7EeIc0kYornTAKMMyfbxockjEtpaEmU"
              alt={club.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-700 flex items-center gap-2">
                <FaLightbulb /> {club.title}
              </h2>
              <p className="text-sm italic text-gray-500">{club.tagline}</p>
              <p className="mt-2 text-gray-600">{club.description}</p>
            </div>
          </div>
        ))}
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQF4SmVwaI-1jA/company-logo_200_200/company-logo_200_200/0/1630460310825?e=2147483647&v=beta&t=88YSoYDjs0oo7EeIc0kYornTAKMMyfbxockjEtpaEmU"
              alt={club.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-700 flex items-center gap-2">
                <FaLightbulb /> {club.title}
              </h2>
              <p className="text-sm italic text-gray-500">{club.tagline}</p>
              <p className="mt-2 text-gray-600">{club.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Clubs;
