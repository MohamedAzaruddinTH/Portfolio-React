import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
          qui rerum aperiam delectus nostrum vero reiciendis facilis quia
          veritatis! Laudantium temporibus error voluptatem ipsam quaerat.
          Consectetur harum nobis sequi!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste
          accusantium unde eveniet. Fugiat, natus, qui delectus autem iste
          repellat rem laudantium quaerat, itaque nam consequuntur alias totam.
          Hic modi sed nesciunt sapiente eum dolores natus eius aliquam, sequi
          tempore porro recusandae facilis suscipit quisquam corrupti error
          quos, est reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default About;
