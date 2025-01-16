import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full flex py-4 px-24 gap-1 sticky">
      {/* Header Content */}
      <div className="w-[60%] flex justify-start items-center">
        <div className="font-bold text-4xl flex gap-2">
          <div className="font-black">Event</div>
          <div className="text-purple-400">Hive</div>
        </div>
      </div>
      <div className="w-[40%] flex justify-between items-center transition-all">
        <div className="font-bold text-black hover:text-gray-600 hover:cursor-pointer">
          Clubs
        </div>
        <div className="font-bold text-black hover:text-gray-600 hover:cursor-pointer">
          Events
        </div>
        <div className="font-bold text-black hover:text-gray-600 hover:cursor-pointer">
          DSW
        </div>
        {/* Menu Button */}
        <button
          className=" bg-gray-200 p-1 rounded-md flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <span className="material-icons">
            <IoMdMenu></IoMdMenu>
          </span>
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-gray-100 shadow-lg z-50 p-6 transition-all">
          <button className="mb-4 text-black self-end" onClick={toggleSidebar}>
            &times;
          </button>
          <ul className="flex flex-col gap-4">
            <li className="text-black text-lg cursor-pointer">Login As DSW</li>
            <li className="text-black text-lg cursor-pointer">
              Login as Club Admin
            </li>
            <li className="text-black text-lg cursor-pointer">
              Application for new club
            </li>
            <li className="text-black text-lg cursor-pointer">SignOut</li>
          </ul>
        </div>
      )}

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Header;
