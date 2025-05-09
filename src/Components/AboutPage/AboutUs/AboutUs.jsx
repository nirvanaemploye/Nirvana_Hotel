import React from "react";
import aboutImg from "../../../assets/AboutImg/AboutUs.jpg";
import Heading from "../../../share/Heading";
import Boat from "../../../assets/Png/Boat.svg";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <section>
      <div className=" py-28 relative">
        <motion.img
          src={Boat}
          alt=""
          className="absolute top-16 right-4 sm:right-16"
          animate={{ y: [-6, -6, -6] ,x: [0, -70, 0]}}
          
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left  */}
          <div className="relative">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              src={aboutImg}
              alt=""
              className="h-[460px] 2xl:h-[550px] w-[460px] 2xl:w-[550px] object-cover p-8 xl:p-0"
            />
            <div
              data-aos="fade-left"
              className="absolute top-20 p-6 sm:p-10 xl:p-20 right-0 bg-secondary/60 text-white"
            >
              <h className="text-[70px] font-semibold">+20</h>
              <p className="text-lg font-normal">Years of Market</p>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col justify-center p-3 lg:ps-8">
            <Heading title="About Us" heading="From the start" align="left" />
            <p
              data-aos="fade-up"
              className="text-gray-500 leading-loose text-center md:text-left"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
