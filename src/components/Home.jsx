import React from "react";
import Layout from "./Layout";
import heroImg from "../assets/images/profile/developer-pic-1.png";
import Animatedtext from "./Animatedtext";
import { Link } from "react-router-dom";

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
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div>
              <Link
                to="https://drive.google.com/file/d/1tKPNhmCZfsmFG6dQ5cm_Uksb4KxoZmuf/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </Link>
              <Link to="mailto:contact.rahul1660@gmail.com">Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
