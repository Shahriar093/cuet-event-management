import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full flex py-4 px-8 md:px-24 gap-1 items-center bg-white shadow-md">
      {/* Header Content */}
      <div className="w-[60%] flex items-center">
        <div
          className="font-bold text-3xl flex gap-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="font-black">Event</span>
          <span className="text-purple-500">Hive</span>
        </div>
      </div>
      <div className="w-[40%] hidden md:flex justify-between items-center transition-all">
        <div
          onClick={() => navigate("/")}
          className="font-medium text-gray-800 hover:text-purple-600 hover:cursor-pointer transition-colors"
        >
          Home
        </div>
        <div className="font-medium text-gray-800 hover:text-purple-600 hover:cursor-pointer transition-colors">
          Clubs
        </div>
        <div
          onClick={() => navigate("/event")}
          className="font-medium text-gray-800 hover:text-purple-600 hover:cursor-pointer transition-colors"
        >
          Events
        </div>
        <div className="font-medium text-gray-800 hover:text-purple-600 hover:cursor-pointer transition-colors">
          DSW
        </div>
        {/* Menu Button */}
        <button
          className="bg-gray-100 p-2 rounded-md flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all"
          onClick={toggleSidebar}
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden bg-gray-100 p-2 rounded-md flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all"
        onClick={toggleSidebar}
      >
        <IoMdMenu size={24} />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 p-6 rounded-r-lg transition-transform transform translate-x-0">
          <button
            className="text-gray-800 font-bold text-2xl hover:text-purple-500 transition-all"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <ul className="mt-6 flex flex-col gap-6">
            <li
              className="text-gray-700 text-lg font-semibold cursor-pointer hover:text-purple-600 transition-all"
              onClick={toggleSidebar}
            >
              Login As DSW
            </li>
            <li
              className="text-gray-700 text-lg font-semibold cursor-pointer hover:text-purple-600 transition-all"
              onClick={()=> navigate('/ClubLogin')}
            >
              Login as Club Admin
            </li>
            <li
              className="text-gray-700 text-lg font-semibold cursor-pointer hover:text-purple-600 transition-all"
              onClick={toggleSidebar}
            >
              Application for New Club
            </li>
            <li
              className="text-gray-700 text-lg font-semibold cursor-pointer hover:text-purple-600 transition-all"
              onClick={toggleSidebar}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 transition-opacity"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Header;
