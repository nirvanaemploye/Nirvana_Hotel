import React from "react";
import Heading from "../../../share/Heading";
import SerImg from "../../../assets/HomeImg/ServiceImgs/Services.png";
import Icon1 from "../../../assets/HomeImg/ServiceImgs/Country.png";
import Icon2 from "../../../assets/HomeImg/ServiceImgs/Hotel.png";
import Icon3 from "../../../assets/HomeImg/ServiceImgs/Rooms.png";
import car from "../../../assets/Png/Car.png";
import Tree from "../../../assets/Png/Tree.png";
import { motion } from "framer-motion";


const Data = [
  { id: 1, img: Icon1, count: "180", name: "Countries" },
  { id: 2, img: Icon2, count: "220", name: "Hotels" },
  { id: 3, img: Icon3, count: "430", name: "Rooms" },
  { id: 4, img: Icon3, count: "560", name: "Workers" },
];

const OurServices = () => {
  return (
    <section className="relative">
      <div className="container py-16 md:py-24">
        {/* Background elements */}
        <motion.img
          src={car}
          alt=""
          className="absolute top-8 right-4 md:right-10 w-8 md:w-14"
          animate={{ x: [0, -400, ] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        
        />
        <motion.img
          src={Tree}
          alt=""
          className="absolute bottom-0 left-4 md:left-10 w-8 md:w-14 animate-pulse duration-1000 ease-in-out"

        />

        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-20 items-center">
          {/* Image side */}
          <div className="w-full">
            <img
              data-aos="fade-right"
              // data-aos-offset="300"
              data-aos-duration="500"
              src={SerImg}
              alt="Our Services"
              className="mx-auto object-contain"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-stretch items-center lg:items-start text-center lg:text-left space-y-7">
            <Heading
              title="Our Services"
              heading="Our Top Services, Curated for You"
              align="left"
            />
            <p
              data-aos="fade-up"
              className="text-gray-500 leading-loose max-w-xl text-base md:text-lg"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-y-14 w-full max-w-md sm:max-w-lg pt-10">
              {Data.map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 sm:w-12 md:w-14"
                  />
                  <div className="flex flex-col items-start">
                    <h1 className="text-2xl sm:text-3xl font-bold">
                      {item.count}
                    </h1>
                    <p className="text-xl font-bold text-primary">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
