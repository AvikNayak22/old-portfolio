import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#060918] flex justify-center items-center"
    >
      {/* container */}
      <div className="max-w-[2000px] max-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#FFFEF9]">
          Hello,my name is Avik Nayak
        </h1>
        <h3 className="text-2xl sm:text-4xl text-[#585F78] py-4 max-w-[700px]">
          I do front-end development.
        </h3>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#3a75c2] hover:border-[#3a75c2]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
