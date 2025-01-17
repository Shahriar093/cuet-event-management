import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Event Hive</h3>
          <p className="text-sm text-gray-400">
            Connecting clubs and events seamlessly.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          &copy; 2025 Event Hive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
