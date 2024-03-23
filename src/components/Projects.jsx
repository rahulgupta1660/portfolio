import React from "react";
import Layout from "./Layout";
import Animatedtext from "./Animatedtext";
import { Link } from "react-router-dom";
import { GithubIcon } from "./Icons";
import Project1 from "../assets/images/projects/crypto-screener-cover-image.jpg";

const Projects = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article className="w-full flex items-center rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
        <Link
          to={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="aynsc"
            className="w-full h-auto"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            to={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="text-left py-2 w-full text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="py-2 font-medium text-dark">{summary}</p>
          <div className="flex pt-2 items-center">
            <Link to={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              to={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
  };

  const Project = ({ title, type, img, link, github }) => {
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
        <Link
          to={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <img
            src={img}
            alt={title}
            loading="lazy"
            decoding="aynsc"
            className="w-full h-auto"
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between pt-4">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            to={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="text-left py-2 w-full text-3xl font-bold">
              {title}
            </h2>
          </Link>
          <div className="flex pt-2 items-center justify-between w-full">
            <Link
              to={link}
              target="_blank"
              className="text-lg font-semibold underline"
            >
              Visit
            </Link>
            <Link to={github} target="_blank" className="w-8">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="w-full pb-16 flex flex-col items-center justify-center">
      <Layout className="pt-16">
        <Animatedtext text="Imagination Trumps Knowledge! " className="pb-16" />
        <div className="grid grid-col-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              img={Project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              img={Project1}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              img={Project1}
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              img={Project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
              link="/"
              github="/"
              type="Featured Project"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
