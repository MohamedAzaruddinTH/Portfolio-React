import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Experienced in building and designing software. I enjoy crafting web
            applications using React, Tailwind, Node.js, and Mongo Atlas.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-8 md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
