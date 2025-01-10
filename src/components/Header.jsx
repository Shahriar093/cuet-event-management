import React from "react";

const Header = () => {
  return (
    <div className="w-full flex py-4 px-24 gap-1">
      <div className="w-[80%] flex justify-start items-center ">
        <div className="font-bold text-4xl flex gap-2">
          <div className="font-black">Event</div>
          <div className="text-purple-400">Hive</div>
        </div>
      </div>
      <div className="w-[20%] flex justify-between items-center">
        <button className="w-[45%] bg-white text-black p-2 rounded-md">
          {" "}
          Login{" "}
        </button>
        <button className="w-[45%] bg-purple-400 text-white p-2 rounded-md">
          {" "}
          Signup{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
