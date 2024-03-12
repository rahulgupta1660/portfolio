import React from "react";

const Experience = () => {
  const Details = ({ position, company, companylink, time, address, work }) => {
    return (
      <li className="py-8 w-[60%] mx-auto flex flex-col items-center justify-between">
        <div>
          <h3 className="capitalize font-bold text-2xl">
            {position}&nbsp;
            <a
              href={companylink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="py-64">
      <h2 className="text-8xl font-bold w-full text-center pb-32">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"></div>
        <ul>
          <Details
            company="Maxxmann Communications"
            position="Frontend Developer"
            time="2021-2023"
            address="SCO 341-342, Sector 34-A
            Chandigarh (160022)"
            work="Designed and developed responsive user interfaces for web applications and collaborated with designers and backend developers to implement efficient frontend solutions"
            companylink="https://maxxmann.in/"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
