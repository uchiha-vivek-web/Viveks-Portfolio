"use client";
import Avatar from "./ui/Avatar";

const Hero = () => {
  return (
    <div className="flex flex-col mt-20 items-center mb-8">
      {/* Profile Section */}
      <div className="text-center mt-8">
        <Avatar />
      </div>
      {/* Name and Title */}
      <h1 className="text-5xl font-bold mt-5">Vivek Sharma</h1>
      <p className="text-2xl font-light text-gray-600 mt-1">software engineer</p>

      {/* Introduction Message */}
      <div className="text-sm text-center text-light mt-4 px-6 py-3 border rounded-full  max-w-xl">
      "Welcome to my portfolio! I am a passionate developer, innovative problem solver, and dedicated lifelong learner committed to building impactful solutions."
      </div>

    </div>
  );
};

export default Hero;
