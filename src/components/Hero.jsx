import React from "react";
import ClubCard from "./ClubCard";
import { FaArrowRight } from "react-icons/fa";
import EventCard from "./EventCard";

const Hero = () => {
  const clubs = [
    {
      name: "Photography Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7R2JegANhop6AKNvwKOnRyCqnA3MXP2dYw&s",
      tagline: "Capture the world through your lens.",
    },
    {
      name: "Chess Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV841G7MrRH7J8ZrLxKuCC8pYPpgVjTVJIw&s",
      tagline: "Strategize, play, and win.",
    },
    {
      name: "Photography Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7R2JegANhop6AKNvwKOnRyCqnA3MXP2dYw&s",
      tagline: "Capture the world through your lens.",
    },
    {
      name: "Chess Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV841G7MrRH7J8ZrLxKuCC8pYPpgVjTVJIw&s",
      tagline: "Strategize, play, and win.",
    },
    {
      name: "Photography Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7R2JegANhop6AKNvwKOnRyCqnA3MXP2dYw&s",
      tagline: "Capture the world through your lens.",
    },
    {
      name: "Chess Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV841G7MrRH7J8ZrLxKuCC8pYPpgVjTVJIw&s",
      tagline: "Strategize, play, and win.",
    },
  ];
  return (
    <div className="w-full p-10">
      <img
        src="/hero.png"
        alt="hero"
        width={1200}
        className="bg-contain mx-auto"
      />
      <div className="">
        <div className="w-full flex flex-col justify-center items-center p-4">
          <p className="text-2xl font-semibold">Welcome to</p>
          <p className="text-6xl font-bold">
            Clubs Event Portal - Event{" "}
            <span className="text-purple-400">Hive</span> of CUET
          </p>
        </div>
      </div>
      <div className="text-4xl font-bold p-8">
        <h1 className="text-purple-500 border-black border-b-1 shadow mb-8">
          Our Clubs
          <div className="w-full px-10 py-10 flex flex-wrap ">
            <div className=" bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
              {clubs.map((club, index) => (
                <ClubCard
                  key={index}
                  name={club.name}
                  image={club.image}
                  tagline={club.tagline}
                />
              ))}
            </div>
            <div className="w-full flex justify-end items-center text-gray-700 font-medium text-[1.5rem]">
              <div className="flex items-center cursor-pointer hover:underline">
                See more <FaArrowRight />{" "}
              </div>
            </div>
          </div>
        </h1>
        <h1 className="text-purple-500 border-black border-b-1 shadow mt-8">
          Upcoming Events
          <div className="w-full px-10 py-10 flex flex-wrap ">
            <div className=" bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <EventCard />
                ))}
            </div>
            <div className="w-full flex justify-end items-center text-gray-700 font-medium text-[1.5rem]">
              <div className="flex items-center cursor-pointer hover:underline">
                See more <FaArrowRight />{" "}
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
