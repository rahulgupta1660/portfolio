import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";

const Navbar = () => {
  const { pathname } = useLocation();

  const Customlink = ({ to, title, className = "" }) => {
    return (
      <Link to={to} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] bg-dark inline-block absolute left-0 top-6 group-hover:w-full transition-[width] ease duration-300 ${
            pathname === to ? "w-full" : "w-0"
          }`}
        ></span>
      </Link>
    );
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav className="flex gap-6">
        <Customlink to="/" title="Home" />
        <Customlink to="/about" title="About" />
        <Customlink to="/projects" title="Projects" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex gap-6">
        <motion.a
          href="https://github.com/rahulgupta1660"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/guptarahul1660/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
