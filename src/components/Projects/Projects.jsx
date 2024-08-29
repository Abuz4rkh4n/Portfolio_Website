import React from "react";
import Project from "./Project";
import project1 from "../../assets/Projects/1.png";
import project2 from "../../assets/Projects/2.png";
import project3 from "../../assets/Projects/3.png";
import project4 from "../../assets/Projects/4.png";

const Projects = () => {
  const websites = [
    {
      heading: "Hoobank",
      description:
        "Welcome to Hoobank, your go-to payment solution. Manage your transactions easily and securely with our user-friendly platform. Whether you're sending, receiving, or tracking payments, Hoobank ensures a smooth experience every step of the way.",
      link: "https://hoobank.com",
      image: project2,
    },
    {
      heading: "Brainwave",
      description:
        "Introducing Brainwave, the secure crypto wallet for all your digital assets. Store, manage, and exchange your cryptocurrencies with ease. Brainwave provides a safe and intuitive interface, making it simple to keep your crypto in check.",
      link: "https://brainwave.com",
      image: project3,
    },
    {
      heading: "Typrform",
      description:
        "Sign up with Typrform, the efficient and easy-to-use form for all your registration needs. Designed for simplicity and effectiveness, Typrform streamlines the signup process, helping you collect user information quickly and securely.",
      link: "https://typrform.com",
      image: project4,
    },
    {
      heading: "Mailmorphix Email Marketing Portfolio",
      description:
        "Explore the email campaigns crafted by Mailmorphix. This site showcases our work in creating, managing, and optimizing emails that engage and convert. See examples of our strategies, content, and results, and learn how we can boost your brand’s email marketing.",
      link: "https://mailmorphix.com",
      image: project1,
    },
  ];

  return (
    <div className="bg-black-background w-full flex flex-col items-center h-screen overflow-scroll overflow-x-hidden">
      <div className="flex flex-col w-11/12 mt-24">
        <h1 className="font-outfit text-custom-white text-2.5rem">
          All Projects
        </h1>
        <div className="flex flex-col items-center mt-12">
          {websites.map((item, index) => (
            <div key={index} className="w-5/6">
              <Project
                heading={item.heading}
                description={item.description}
                link={item.link}
                image={item.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
