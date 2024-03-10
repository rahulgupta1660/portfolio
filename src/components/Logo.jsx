import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  const Motionlink = motion(Link);

  return (
    <div className="flex item-center justify-center pt-2">
      <Motionlink
        to="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        RG
      </Motionlink>
    </div>
  );
};

export default Logo;
