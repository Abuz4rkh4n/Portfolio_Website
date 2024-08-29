import React, { useState } from "react";
import "../../index.css";

const Project = ({ heading, description, link, image, index }) => {
  const [scroll, setScroll] = useState(false);
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-between border-[2px] border-dark-grey bg-custom-black rounded-xl h-[280px] overflow-hidden mb-20`}
    >
      <div className="w-2/4 font-outfit px-8 flex flex-col justify-center">
        <h2 className="text-custom-white text-[28px]">{heading}</h2>
        <p className="text-custom-grey my-4">{description}</p>
        <a
          className="text-[20px] flex items-center font-semibold text-custom-blue hover:translate-x-2 transition duration-100 ease-linear"
          href={link}
        >
          Go to website
        </a>
      </div>
      <div
        onMouseEnter={() => setScroll(true)}
        onMouseLeave={() => setScroll(false)}
        className="w-2/4 h-full border-2 rounded-xl overflow-hidden border-custom-shade relative"
      >
        <img
          className={`rounded-xl ${scroll === true ? "scroll-image" : ""} `}
          src={image}
          alt="Project"
        />
      </div>
    </div>
  );
};

export default Project;
