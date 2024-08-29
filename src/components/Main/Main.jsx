import React from "react";
import Home from "./Home/Home";
import next from "../../assets/next.png";

const Main = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-11/12 3xl:w-inherit my-12">
        <h1 className="text-custom-white text-1.6rem xl:text-2.5rem font-outfit">
          Web Developer and Designer
        </h1>
        <a href="#" className="flex items-center justify-center ">
          <h1 className="text-custom-blue font-outfit text-1.4rem">
            Subscribe Now
          </h1>
          <img
            src={next}
            className="w-5 ml-2 hidden xl:block"
            alt="Subscribe"
          />
        </a>
      </div>
      <Home />
    </div>
  );
};

export default Main;
