import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="w-full top-0 left-0 h-full absolute bg-gray-900/30"></div>
      <div className="absolute w-full h-full flex flex-col text-white justify-center top-0 text-center p-4">
        <h1>First class Travel</h1>
        <h3 className="py-4">Top 1% Locations Worldwide</h3>
        <form className="flex justify-between mx-auto w-full max-w-[700px] items-center border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              className="focus:outline-none bg-transparent w-[300px] sm:w-[400px]"
              type="text"
              placeholder="Search Destination"
            />
          </div>
          <div className="">
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
