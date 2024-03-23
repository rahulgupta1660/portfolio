import React from "react";
import Layout from "./Layout";
import { LinkArrow } from "./Icons";
import heroImg from "../assets/images/profile/developer-pic-1.png";
import lightbulb from "../assets/images/svgs/miscellaneous_icons_1.svg";
import Animatedtext from "./Animatedtext";
import { Link } from "react-router-dom";
import Hireme from "./Hireme";

const Home = () => {
  return (
    <div className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2">
            <img
              src={heroImg}
              loading="lazy"
              decoding="aynsc"
              className="w-full h-auto"
              alt="hero_img"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <Animatedtext
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p className="py-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects
              showcasing my expertise in React.js and web development.
            </p>
            <div className="pt-2 items-center self-start flex gap-6">
              <Link
                to="https://drive.google.com/file/d/1tKPNhmCZfsmFG6dQ5cm_Uksb4KxoZmuf/view?usp=drive_link"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark"
                download={true}
              >
                Resume <LinkArrow className="w-6 pl-1" />
              </Link>
              <Link
                to="mailto:contact.rahul1660@gmail.com"
                className="text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <Hireme />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <img
          src={lightbulb}
          loading="lazy"
          decoding="aynsc"
          className="w-full h-auto"
          alt="lightbulb"
        />
      </div>
    </div>
  );
};

export default Home;
