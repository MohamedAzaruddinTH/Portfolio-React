import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Nextjs from "../assets/nextjs.png";
import Graphql from "../assets/graphql.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Nextjs,
      title: "NEXT JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: Graphql,
      title: "GRAPHQL",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: Github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline p-2 border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 w-full text-center">
          {techs.map(({ id, src, title,style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
