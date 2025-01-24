import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
   const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const events = {
    approved: [
      { id: 1, name: "Tech Fest", date: "2025-02-10" },
      { id: 2, name: "Art Workshop", date: "2025-03-15" },
    ],
    pending: [{ id: 3, name: "Science Expo", date: "2025-04-05" }],
    past: [{ id: 4, name: "Music Night", date: "2024-12-20" }],
  };

  const members = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-600">
          Club Admin Dashboard
        </h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full mb-6 p-2 border rounded-md"
        />

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Approved Events</h3>
          <ul className="bg-white p-4 rounded-lg shadow-md">
            {events.approved.map((event) => (
              <li key={event.id} className="mb-2">
                {event.name} - {event.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Pending Events</h3>
          <ul className="bg-white p-4 rounded-lg shadow-md">
            {events.pending.map((event) => (
              <li key={event.id} className="mb-2">
                {event.name} - {event.date}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Past Events</h3>
          <ul className="bg-white p-4 rounded-lg shadow-md">
            {events.past.map((event) => (
              <li key={event.id} className="mb-2">
                {event.name} - {event.date}
              </li>
            ))}
          </ul>
        </div>

        <button
        onClick={()=> navigate('/applyevent')}
         className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
          Apply for an Event
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Member List</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {members.map((member) => (
            <li key={member.id} className="mb-2">
              {member.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
