import React, { useState } from "react";
import Modal from "react-modal";
import nike from "../assets/portfolio/nike.png";
import nikey from "../assets/videos/nikey.mp4";
import clickcrazy from "../assets/portfolio/ClickCrazy.png";
import ClickCrazy from "../assets/videos/ClickCrazyh.mp4";
import ReelFlicks from "../assets/portfolio/ReelFlicks.png";
import reelFlicks from "../assets/videos/ReelFlickz.mp4";
import rcpe from "../assets/portfolio/rcpe.png";
import Recipe from "../assets/videos/Recipe.mp4";
import weather from "../assets/portfolio/weather.png";
import Weather from "../assets/videos/weather.mp4";
import fitness from "../assets/portfolio/fitness.png";
import Fitness from "../assets/videos/Fitnessz.mp4";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nike,
      video: nikey,
      codeLink: "https://github.com/MohamedAzaruddinTH/Nike-store-AjSTACK",
    },
    {
      id: 2,
      src: clickcrazy,
      video: ClickCrazy,
      codeLink: "https://github.com/MohamedAzaruddinTH/ClickCrazyh",
    },
    {
      id: 3,
      src: ReelFlicks,
      video: reelFlicks,
      codeLink: "https://github.com/MohamedAzaruddinTH/ReelFlicks",
    },
    {
      id: 4,
      src: fitness,
      video: Fitness,
      codeLink: "https://github.com/MohamedAzaruddinTH/Fitness",
    },
    {
      id: 5,
      src: rcpe,
      video: Recipe,
      codeLink: "https://github.com/MohamedAzaruddinTH/Recipe",
    },
    {
      id: 6,
      src: weather,
      video: Weather,
      codeLink: "https://github.com/MohamedAzaruddinTH/Weather_App",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDemoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline p-2 border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, video, codeLink }) => (
            <div key={id} className="shadow-lg shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto sm:w-80 sm:h-80 md:w-96 md:h-96"
              />

              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(video)}
                >
                  Demo
                </button>
                <Link
                  to={codeLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="video Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
            content: {
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
              padding: "20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "gray",
              color: "#FFF",
            },
          }}
        >
          <button
            onClick={closeModal}
            className="text-white bg-red-500 px-3 py-1 mb-1 rounded font-semibold"
          >
            Close
          </button>
          {selectedVideo && (
            <video controls className="rounded-md w-full h-auto">
              <source src={selectedVideo} type="video/mp4" />
            </video>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
