import React from "react";
import Heading from "../../../share/Heading";
import car from "../../../assets/Png/Car.svg";
import tree from "../../../assets/Png/Tree.svg";
import GalleryGrid from "./GalleryGrid";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="relative">
      <div className=" py-24 ">
      <motion.img
          src={car}
          alt=""
          className="absolute top-10 right-4 md:right-10 w-8 md:w-14"
          animate={{ x: [0, -400, ] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        
        />
        <img
          src={tree}
          alt=""
          className="absolute bottom-8 left-6 lg:left-16 animate-pulse duration-1000 ease-in-out"

        />
        <Heading title="Gallery" heading="Image Gallery" />
        {/* <GalleryGrid /> */}
        <GalleryGrid />
      </div>
    </section>
  );
};

export default Gallery;
