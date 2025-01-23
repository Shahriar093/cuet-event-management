import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentID: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.prothomalo.com/prothomalo-english%2F2022-06%2Fccc4c526-b989-4a2c-b87f-157a667ce4d5%2Fprothomalo_bangla_2022_01_b76a4ae6_8097_4f03_adca_9c26d6b8e9c6_prothomalo_bangla_2020_11_a87fb53d_79.png?rect=0%2C45%2C640%2C336&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="mb-8">Please log in to access your account.</p>
          <div className="mt-4 text-center">
            <p className="text-lg mb-4">Apply for club membership</p>
            <button
              onClick={() => navigate("/ClubSignup")}
              className="px-6 py-3 bg-purple-700 hover:bg-gray-800 rounded-md text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-start items-center p-8 pt-32 ">
        <h2 className="text-xl mb-4 font-sans font-bold text-purple-500">
          Login
        </h2>
        <form className="w-3/4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="studentID">
              STUDENT ID
            </label>
            <input
              type="text"
              id="studentID"
              value={formData.studentID}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your student ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
