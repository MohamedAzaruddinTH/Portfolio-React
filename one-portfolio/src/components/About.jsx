// About.js
import React from "react";

const About = () => {
  return (
    <div name="about" className="about-section min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-4">
          Hi, I'm [ Mohammed Azaruddin ], a passionate MERN Stack Developer with a love for crafting web applications. I specialize in building robust and user-friendly experiences using technologies like React, Node.js, and MongoDB.
        </p>
        <br />
        <p className="text-xl">
          Over the course of my career, I've had the opportunity to work on exciting projects that showcase my skills in front-end and back-end development. Check out some of my work on{" "}
          <a
            href="https://github.com/MohamedAzaruddinTH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            GitHub
          </a>
          .
        </p>
        <br />
        <p className="text-xl">
          Let's connect! Whether you have a project in mind or just want to say hello, feel free to reach out to me on{" "}
          <a
            href="https://www.linkedin.com/in/mohammad-azaruddin-747549268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            LinkedIn
          </a>{" "}
          or via email at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-500"
          >
            azarajju076@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
