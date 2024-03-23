import React from "react";
import LiIcon from "./LiIcon";

const Education = () => {
  const Details = ({ courseName, time, address, work }) => {
    return (
      <li className="py-8 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon />
        <div>
          <h3 className="capitalize font-bold text-2xl">{courseName}</h3>
          <span className="capitalize font-normal text-dark/75 text-1xl">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="">
      <h2 className="text-8xl font-bold w-full text-center pb-32">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"></div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            courseName="Bachelor of Computer Application"
            time="2017-2019"
            address="SGGS College Sector 26, Chandigarh"
            work="Learn programming languages, database management, web development, and software engineering principles. The program also emphasizes practical skills through lab work, projects, and internships to prepare students for careers in the IT industry."
          />
          <Details
            courseName="Master of Computer Application"
            time="2023-2025"
            address="Chitkara University (CU)"
            work="Delves deeper into advanced computer science topics like artificial intelligence, machine learning, and cybersecurity. It emphasizes software development methodologies, system design, and IT management skills. Graduates are equipped to take on leadership roles in software development, project management, and IT consulting."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
