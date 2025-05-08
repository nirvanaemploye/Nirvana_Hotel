import React from "react";
import Heading from "../../../share/Heading";
import balloon from "../../../assets/Png/balloon.png";
import Popular from "./Popular";
import { motion } from "framer-motion"; // Import motion  from "framer-motion";

const TopDestination = () => {
  return (
    <section className="relative">
      <motion.img
        src={balloon}
        alt=""
        className="absolute top-0 lg:right-16 md:h-32 h-14"
        animate={{ x: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container py-24">
        <Heading title="Top Destination" heading="Popular Visit Hotels" />
        <Popular />
      </div>
    </section>
  );
};

export default TopDestination;
