import React, { useState } from "react";
import Disnay from "../../../assets/HomeImg/TopDestination/DisneyLand.jpg";
import Paris from "../../../assets/HomeImg/TopDestination/Paris.jpg";
import London from "../../../assets/HomeImg/TopDestination/London.jpg";
import Fransh from "../../../assets/HomeImg/TopDestination/Fransh.jpg";
import India from "../../../assets/HomeImg/TopDestination/India.jpg";
import { MdLocationOn } from "react-icons/md";
import PrimaryBtn from "../../../share/PrimaryBtn";
// import hoverSound from "../assets/sounds/hover.mp3"; // <-- Add your sound file

const hotels = [
  {
    name: "Hotel Disney",
    location: "Disney Land",
    price: "$5/Day",
    button: true,
    image: Disnay,
  },
  {
    name: "Hotel Paris",
    location: "Paris",
    price: "$5/Day",
    button: true,
    image: Paris,
  },
  {
    name: "Hotel London",
    location: "London",
    price: "$5/Day",
    button: true,
    image: London,
  },
  {
    name: "Hotel Fransh",
    location: "Fransh",
    price: "$5/Day",
    button: true,
    image: Fransh,
  },
  {
    name: "Hotel India",
    location: "India",
    price: "$5/Day",
    button: true,
    image: India,
  },
];

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500"
      className="flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-between gap-6 pt-16 px-4"
    >
      {hotels.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          className={`relative bg-transparent rounded-tl-2xl rounded-br-2xl overflow-hidden transition-all duration-500 ease-in-out 
          ${
            activeIndex === index ? "w-80 xl:w-96" : "w-60"
          } h-[550px] hover:shadow-2xl group`}
        >
          <img
            src={item.image}
            alt={`Image of ${item.name}`}
            className=" h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-100"
          />
          <div className="p-5 absolute top-0 font-bold text-white flex flex-col justify-end items-center h-full bg-gradient-to-t from-black/80 to-transparent w-full gap-y-2">
            {item.button && activeIndex === index && (
              <PrimaryBtn
                delay={50}
                className="hover:bg-secondary transition-opacity duration-300"
              >
                Book Now
              </PrimaryBtn>
            )}
            {activeIndex === index && (
              <p className="text-2xl transition-opacity duration-300">
                {item.price}
              </p>
            )}
            <div className="flex flex-shrink justify-center w-full mt-8 duration-300 transition ease-in-out overflow-hidden">
              {activeIndex === index && (
                <p className="transition-opacity mr-auto duration-300  h-5">
                  {item.name}
                </p>
              )}
              <h2 className="text-xl font-semibold flex items-center gap-1">
                <MdLocationOn className="text-primary" />
                {item.location}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
