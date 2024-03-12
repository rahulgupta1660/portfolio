import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark absolute py-3 px-6 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    );
  };

  return (
    <div>
      <h2 className="text-8xl font-bold text-center pt-64 w-full">Skills</h2>
      <div className="w-full h-screen flex rounded-full justify-center items-center bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark "
          whileHover={{ scale: 1.5 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Bootstrap" x="-20vw" y="-15vw" />
        <Skill name="TailwindCSS" x="32vw" y="-5vw" />
        <Skill name="Jquery" x="-25vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
