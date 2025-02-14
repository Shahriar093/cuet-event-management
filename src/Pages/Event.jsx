import React from "react";
import Header from "../components/Header";

const Event = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex h-[20rem] px-10">
        <div
          className="w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.prothomalo.com/prothomalo-english%2F2022-06%2Fccc4c526-b989-4a2c-b87f-157a667ce4d5%2Fprothomalo_bangla_2022_01_b76a4ae6_8097_4f03_adca_9c26d6b8e9c6_prothomalo_bangla_2020_11_a87fb53d_79.png?rect=0%2C45%2C640%2C336&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4">Looking for an event?</h1>
            <div className="w-full flex gap-4 items-center justify-center mb-4">
              <div className="w-[30%] flex flex-col">
                Club
                <select
                  id="club"
                  className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={`Option${i + 1}`}>
                      Club - {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[30%] flex flex-col">
                Start Date
                <input
                  type="date"
                  id="startDate"
                  className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                />
              </div>
              <div className="w-[30%] flex flex-col">
                End Date
                <input
                  type="date"
                  id="endDate"
                  className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 "
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
