import React from "react";
import Heading from "../../../share/Heading";
import Airplane from "../../../assets/Png/Airplane.png";
import GuideCards from "./GuideCards";
import { motion } from "framer-motion";

const Guide = () => {
  return (
    <section>
      <div className="bg-primary/5 py-24 relative">
        <motion.img
          src={Airplane}
          alt=""
          className="absolute top-32 left-4 sm:left-16 h-12 sm:h-[78px]"
          animate={{ x: [0, 400] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <Heading
          title="Meet our guide"
          heading="Tours & Travel Guide"
          className="text-left"
        />
        <GuideCards />
      </div>
    </section>
  );
};

export default Guide;
