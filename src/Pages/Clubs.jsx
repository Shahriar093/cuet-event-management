import React, { useEffect, useState } from "react";
import { FaLightbulb, FaSearch, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:2000/allclubs");
        setClubs(response.data);
        setFilteredClubs(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };
    getData();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = clubs.filter((club) =>
      club.name.toLowerCase().includes(query)
    );
    setFilteredClubs(filtered);
  };

  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  else
    return (
      <div>
        <Header />
        {/* Header Section with Search Bar */}
        <div className="relative bg-purple-500 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Explore Our Clubs</h1>
          <p className="mt-2 text-lg opacity-80">
            Find the perfect club for you!
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-4 top-3 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for a club..."
                className="w-full pl-12 pr-4 py-3 text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Clubs Section */}
        <div className="p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <div
                  key={club._id}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => navigate("/clubdetails")}
                >
                  {/* Club Images (Carousel Style) */}
                  <div className="relative">
                    <img
                      src={club.imglink}
                      alt={club.name}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 text-sm rounded-lg">
                      <FaUsers className="inline-block mr-1" /> {club.members}{" "}
                      Members
                    </div>
                  </div>

                  {/* Club Info */}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-purple-700 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-400" /> {club.name}
                    </h2>
                    <p className="text-sm italic text-gray-500">
                      {club.tagline}
                    </p>
                    <p className="mt-3 text-gray-700">{club.des}</p>

                    {/* Club Stats */}
                    <div className="mt-4 flex justify-between text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-purple-500" />{" "}
                        <span>Events: {club.events}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-blue-500" />{" "}
                        <span>Members: {club.members}</span>
                      </div>
                    </div>

                    {/* Join Button */}
                    <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
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

        <Footer />
      </div>
    );
};

export default Clubs;
