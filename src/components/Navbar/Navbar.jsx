import React, { useState } from "react";
import Item from "./Items/Items";
import profileImage from "../../assets/image.jpeg";
import home from "../../assets/home.png";
import project from "../../assets/project.png";
import video from "../../assets/play.png";
import about from "../../assets/support.png";
import contact from "../../assets/email.png";
import homeHover from "../../assets/Navbar_Hover/homeHover.png";
import projectHover from "../../assets/Navbar_Hover/projectHover.png";
import videoHover from "../../assets/Navbar_Hover/playHover.png";
import aboutHover from "../../assets/Navbar_Hover/supportHover.png";
import contactHover from "../../assets/Navbar_Hover/emailHover.png";
import hamBurger from "../../assets/more.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const location = useLocation();
  const url = location.pathname;

  const items = [
    { name: "Home", url: home, urlHover: homeHover, href: "/home" },
    {
      name: "Projects",
      url: project,
      urlHover: projectHover,
      href: "/projects",
    },
    { name: "Videos", url: video, urlHover: videoHover, href: "/videos" },
    { name: "About", url: about, urlHover: aboutHover, href: "/about" },
    { name: "Contact", url: contact, urlHover: contactHover, href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 bg-custom-black z-40 flex items-center justify-between w-full p-5 xl:hidden shadow-header">
        <a className="flex items-center cursor-pointer">
          <img
            src={profileImage}
            className="w-12 rounded-full "
            alt="Profile"
          />
          <h1 className=" text-custom-white font-outfit ml-2">Portfolio</h1>
        </a>
        <button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          <img src={hamBurger} alt="Menu" className="mr-4" />
        </button>
      </div>
      <div
        className={`absolute bg-custom-black h-screen xl:flex 
                     ${
                       !isHidden ? "flex" : "hidden"
                     }  flex-col pl-12 w-3/6 lg:w-3/12 xl:3/6 xl:relative z-30 `}
      >
        <div className=" flex-col hidden xl:flex">
          <img className="w-32 rounded-full mt-10 " src={profileImage} alt="" />
          <h1 className="font-outfit text-1.4rem text-custom-white mt-4 font-bold">
            Muhammad Abuzar
          </h1>
          <h4 className="font-outfit text-custom-grey">Web Developer</h4>
        </div>
        <div className=" flex items-start w-full mt-32 xl:mt-0">
          <ol className="text-blue-50 mt-12 flex flex-col w-full">
            {items.map((item, index) => (
              <li
                className={`flex items-center w-full mt-6 font-outfit ${
                  url.includes(item.href)
                    ? ""
                    : " text-custom-white hover:text-custom-blue transition duration-200 ease transform hover:translate-x-2"
                } text-xl font-medium`}
                key={index}
              >
                <Item
                  itemName={item.name}
                  itemImg={item.url}
                  itemHoverImg={item.urlHover}
                  url={url}
                  hrefLink={item.href}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div
        className={`absolute w-screen h-screen bg-black bg-opacity-70 z-20 xl:hidden ${
          !isHidden ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
