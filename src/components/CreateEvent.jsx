import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    venue: "",
    date: "",
    start_time: "",
    end_time: "",
    event_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen flex justify-center items-center m-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
          Create Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Venue
            </label>
            <input
              type="text"
              name="venue"
              placeholder="Event Venue"
              value={formData.venue}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Start Time
              </label>
              <input
                type="time"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                End Time
              </label>
              <input
                type="time"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              name="event_description"
              placeholder="Describe your event..."
              value={formData.event_description}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition"
          >
            Submit Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
