import React from "react";
import Heading from "../../../share/Heading";
import balloon from "../../../assets/Png/balloon.png";
import Img1 from "../../../assets/AboutImg/Gallery/Img1.jpg";
import Img2 from "../../../assets/AboutImg/Gallery/Img2.jpg";
import Img3 from "../../../assets/AboutImg/Gallery/Img3.jpg";
import Img4 from "../../../assets/AboutImg/Gallery/Img4.jpg";
import Img5 from "../../../assets/AboutImg/Gallery/Img5.jpg";
import Img6 from "../../../assets/AboutImg/Gallery/Img6.jpg";
import { motion } from "framer-motion";

const AboutGallery = () => {
  return (
    <section>
      <div className="container py-24 relative">
        <Heading title="Our Gallery" heading="Our Visual Journey" />
        <motion.img
          src={balloon}
          alt=""
          className="absolute top-12 right-6 lg:right-16 md:h-32 h-14"
          animate={{ x: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Image Grid */}
        <div  className="flex flex-col lg:flex-row items-center justify-center gap-5 my-12 ">
          <div data-aos="zoom-in-right" className="h-full overflow-hidden rounded-3xl">
            <img
              src={Img1}
              alt=""
              className="min-h-[450px] rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div  className="grid grid-cols-2 gap-5 ">
            <div data-aos="zoom-in-right" className="overflow-hidden rounded-3xl">
              <img
                src={Img6}
                alt=""
                className="rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div data-aos="zoom-in-left" className="overflow-hidden rounded-3xl">
              <img
                src={Img4}
                alt=""
                className="rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div data-aos="zoom-in-right" className="overflow-hidden rounded-3xl">
              <img
                src={Img5}
                alt=""
                className="rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div data-aos="zoom-in-left" className="overflow-hidden rounded-3xl">
              <img
                src={Img6}
                alt=""
                className="rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div data-aos="zoom-in-left" className="h-full overflow-hidden rounded-3xl ">
            <img
              src={Img2}
              alt=""
              className="min-h-[450px] rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
