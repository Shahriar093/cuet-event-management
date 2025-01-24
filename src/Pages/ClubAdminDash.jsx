import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdminDashboard from "../components/AdminDashboard";

const ClubAdminDashboard = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen overflow-hidden">
      <div className="w-full flex justify-center items-center border-black border-b-1 shadow">
        <Header />
      </div>
      <div>
        <AdminDashboard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClubAdminDashboard;
