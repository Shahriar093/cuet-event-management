import React from "react";
import Header from "../components/Header";
import CreateEvent from "../components/CreateEvent";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Home = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center border-black border-b-1 shadow">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div>
        <Login />
      </div> */}
      {/* <CreateEvent /> */}
    </div>
  );
};

export default Home;
