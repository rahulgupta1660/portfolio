import { motion } from "framer-motion";
import React from "react";

const LiIcon = () => {
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-dark stroke-[5px] fill-light"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse fill-primary stroke-none"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
