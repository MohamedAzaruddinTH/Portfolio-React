import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import MongoDb from "../assets/mongoDb.png";
import Git from "../assets/git.png";

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
      src: Node,
      title: "NODE JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: MongoDb,
      title: "MONGO DB",
      style: "shadow-amber-900",
    },
    {
      id: 7,
      src: Github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: Git,
      title: "GIT",
      style: "shadow-lime-500",
    },
    {
      id: 9,
      src: Tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white "
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline p-2 border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6 mb-4">These are the technologies I've worked with </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8  text-center">
          {techs.map(({ id, src, title,style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
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
