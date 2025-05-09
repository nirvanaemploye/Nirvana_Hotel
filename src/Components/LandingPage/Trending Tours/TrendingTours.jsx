import React from "react";
import Heading from "../../../share/Heading";
import DestinationCard from "./DestinationCard";
import Airplane from "../../../assets/Png/Airplane.svg";
import { motion } from "framer-motion";


const TrendingTours = () => {
  return (
    <section className="bg-primary/5 relative">
      <div className="container py-24 space-y-12 ">
        <motion.img
          src={Airplane}
          alt=""
          className="absolute top-32 left-4 sm:left-16 h-12 sm:h-[78px]"
          animate={{ x: [0, 400, ] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <Heading title="Trending Tours" heading="Most Popular Tours" className="" />

        <DestinationCard />
        {/* <div className="container py-2"></div> */}
        {/* <DestinationCard /> */}
      </div>
    </section>
  );
};

export default TrendingTours;
