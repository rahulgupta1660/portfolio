import React from "react";
import Layout from "./Layout";
import Animatedtext from "./Animatedtext";
import profilepic from "../../src/assets/images/profile/developer-pic-2.jpg";
import Skills from "./Skills";
import Experience from "./Experience";

const About = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <Animatedtext text="Passion Fuels Purpose! " className="pb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-4 flex flex-col items-start justify-start">
            <h2 className="text-lg font-bold uppercase py-4 text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm <span className="font-bold">Rahul Gupta</span>, a web
              developer and UI/UX designer with a passion for creating
              beautiful, functional, and user-centered digital experiences. With
              4 years of experience in the field. I am always looking for new
              and innovative ways to bring my clients' visions to life.
            </p>

            <p className="font-medium py-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 flex flex-col items-start justify-start">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark"></div>
            <img
              src={profilepic}
              alt="profile"
              loading="lazy"
              decoding="aynsc"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
        <Skills />
        <Experience />
      </Layout>
    </div>
  );
};

export default About;
