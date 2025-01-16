import React from "react";
import Header from "./Header";
import CreateEvent from "./CreateEvent";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center border-black border-b-1 shadow">
        <Header />
      </div>
      <Hero />

      {/* <CreateEvent /> */}
    </div>
  );
};

export default Home;
