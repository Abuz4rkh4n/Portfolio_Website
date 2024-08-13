import React from "react";
import right from "../../../assets/next.png";
import javaScript from "../../../assets/Skills/js.png";
import react from "../../../assets/Skills/react.png";
import next from "../../../assets/Skills/Next.js.png";
import html from "../../../assets/Skills/html-5.png";
import css from "../../../assets/Skills/css-3.png";
import tailwind from "../../../assets/Skills/tailwind.png";
import bootstrap from "../../../assets/Skills/bootstrap.png";
import node from "../../../assets/Skills/programing.png";
import python from "../../../assets/Skills/python.png";
import mySQL from "../../../assets/Skills/mysql.png";

const Home = () => {
  return (
    <div className="relative w-max">
      <div className="relative top-4 p-4 grid grid-cols-1 3xl:grid-cols-2 3xl:grid-rows-2 3xl:top-0 grid-rows-4 justify-items-center w-max gap-4">
        <div className="grid grid-cols-2 justify-items-center w-max gap-4 z-10">
          <div
            className="flex flex-col items-center justify-center bg-custom-black w-80 h-56
                    border border-solid border-dark-grey rounded-xl"
          >
            <h1 className="font-outfit text-custom-white text-3rem leading-10">
              20+
            </h1>
            <h4 className=" font-outfit text-custom-grey text-md mt-5">
              Completed Projects
            </h4>
          </div>
          <div
            className="flex flex-col items-center justify-center bg-custom-black w-80 h-56
                    border border-solid border-dark-grey rounded-xl"
          >
            <h1 className="font-outfit text-custom-white text-2rem">
              React Expert
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center bg-custom-black w-80 h-56
                    border border-solid border-dark-grey rounded-xl"
          >
            <h1 className="font-outfit text-custom-white text-3rem leading-10">
              10+
            </h1>
            <h4 className=" font-outfit text-custom-grey text-md mt-4">
              Satisfied Clients
            </h4>
          </div>
          <div
            className="flex flex-col items-center justify-center bg-custom-black w-80 h-56
                    border border-solid border-dark-grey rounded-xl"
          >
            <div className="flex justify-center items-end">
              <h1 className=" font-outfit text-custom-white text-3rem leading-10">
                3
              </h1>
              <h3 className=" font-outfit text-custom-white text-xl ml-1 leading-3">
                Years
              </h3>
            </div>
            <div>
              <h4 className=" font-outfit text-custom-grey text-md mt-4">
                Development Experience
              </h4>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center p-6 bg-custom-black w-10rem border border-solid border-dark-grey rounded-xl z-10">
          <h1 className=" font-outfit text-custom-white text-2rem">
            Your Trusted Web Development Partner
          </h1>
          <p className=" font-outfit text-custom-grey text-lg leading-5 my-3 font-light">
            Say goodbye to the headache of bridging the gap between coding and
            aesthetics, and welcome a web developer who seamlessly integrates
            functionality with captivating design, ensuring your online presence
            reflects your unique vision flawlessly.
          </p>
          <a
            href="#"
            className="text-custom-blue text-1.6rem flex items-center"
          >
            <h3 className="font-outfit">Get in Touch</h3>
            <img src={right} alt="right" className="w-6 ml-2 " />
          </a>
        </div>
        <div className="bg-custom-black w-10rem border border-solid border-dark-grey rounded-xl flex items-center justify-center z-10">
          <h1 className=" text-custom-white font-outfit text-2.5rem">
            Featured Projects
          </h1>
        </div>
        <div className="bg-custom-black w-10rem border border-solid border-dark-grey rounded-xl flex flex-col items-center justify-center z-10">
          <h1 className=" text-custom-white font-outfit text-2.5rem mb-4">
            Skills
          </h1>
          <div className="flex items-center justify-center flex-wrap w-15rem">
            <img
              className="w-16 m-3 rounded-md"
              src={javaScript}
              alt="JavaScript"
            />
            <img className="w-16 m-3" src={react} alt="React" />
            <div className="bg-custom-white rounded-md m-2 p-1">
              <img className="w-16" src={next} alt="Next" />
            </div>
            <img className="w-16 m-3" src={html} alt="HTML" />
            <img className="w-16 m-3" src={css} alt="CSS" />
            <img className="w-16 m-3" src={tailwind} alt="TailWind" />
            <img className="w-16 m-3" src={bootstrap} alt="Bootstrap" />
            <img className="w-16 m-3" src={node} alt="Node" />
            <img className="w-16 m-3" src={python} alt="Python" />
            <img className="w-16 m-3" src={mySQL} alt="mySQL" />
          </div>
        </div>
      </div>
      <div className="absolute bg-custom-shade w-12 h-12 rounded-full top-91 left-90 z-0 shadow-3xl"></div>
    </div>
  );
};

export default Home;
