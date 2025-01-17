import React from "react";
import Header from "./Header";
import CreateEvent from "./CreateEvent";
import Hero from "./Hero";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Login from "./Login";

const Home = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center border-black border-b-1 shadow">
        <Header />
      </div>
      {/* <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div> */}
      <div>
        <Login />
      </div>
      {/* <CreateEvent /> */}
    </div>
  );
};

export default Home;
