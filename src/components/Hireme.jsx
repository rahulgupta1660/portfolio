import React from "react";
import { CircularText } from "./Icons";
import { Link } from "react-router-dom";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center">
      <div className="w-48 h-autoflex items-center justify-center relative">
        <CircularText className="animate-spin-slow" />
        <Link
          to="mailto:contact.rahul1660@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark w-20 h-20 rounded-full text-lg font-bold hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
