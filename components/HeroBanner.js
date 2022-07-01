import React from "react";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-center space-y-4 pt-28 relative border border-green-400 ">
        <h2 className="font-bold text-2xl text-red-500">Fitness Club</h2>
        <h1 className="font-bold text-5xl ">
          Sweat, Smile <br></br>and Repeat
        </h1>
        <p className="text-gray-500">Check out the most effective exercises</p>
        <button className="red-button">EXPLORE MORE</button>
        <p className="text-9xl text-red-500 opacity-30 md:text-[8rem] font-bold">
          Exercises
        </p>
      </div>
      <img
        className="hidden md:inline w-[30rem] absolute right-[13rem] top-0 "
        src="assets/images/banner.png"
      />
    </div>
  );
};

export default HeroBanner;
