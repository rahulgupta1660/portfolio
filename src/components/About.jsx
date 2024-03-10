import React from "react";
import Layout from "./Layout";
import Animatedtext from "./Animatedtext";

const About = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Layout className="pt-16">
        <Animatedtext text="Passion Fuels Purpose! " />
      </Layout>
    </div>
  );
};

export default About;
