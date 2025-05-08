import React from "react";
import Pro1 from "../../../assets/AboutImg/GuideProfiles/pro1.png";
import Pro2 from "../../../assets/AboutImg/GuideProfiles/pro2.png";
import Pro3 from "../../../assets/AboutImg/GuideProfiles/pro3.png";
import Pro4 from "../../../assets/AboutImg/GuideProfiles/pro4.png";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const data = [
  {
    id: 1,
    img: Pro1,
    title: "Allen Johnson",
    description: "Tourist guide",
  },
  {
    id: 2,
    img: Pro2,
    title: "Jane Coper",
    description: "Tourist guide",
  },
  {
    id: 3,
    img: Pro3,
    title: "Mikel Haries",
    description: "Tourist guide",
  },
  {
    id: 4,
    img: Pro4,
    title: "David Chals",
    description: "Tourist guide",
  },
];

const GuideCards = () => {
  return (
    <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 gap-y-28 mt-16">
      {data.map((item) => (
     <div
     data-aos="fade-up"
     key={item.id}
     className="relative container bg-white shadow-xl pt-6 sm:pt-24 pb-6 px-4 rounded-2xl flex flex-col items-center text-center group"
   >
     {/* Profile Image */}
     <img
       src={item.img}
       alt={item.title}
       className="w-28 h-28 sm:w-40 sm:h-40 rounded-full absolute -top-14 object-cover border-4 border-white transition-transform duration-300 group-hover:scale-110"
     />
   
          {/* Content */}
          <div className="bg-primary/10 mt-8 w-full space-y-2 py-4 px-2 rounded-2xl">
            <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <div className="flex items-center justify-center gap-4 text-primary py-2">
              <FaFacebookF className="cursor-pointer hover:text-black transition-colors duration-300" />
              <AiFillInstagram className="cursor-pointer hover:text-black transition-colors duration-300" />
              <RiWhatsappFill className="cursor-pointer hover:text-black transition-colors duration-300" />
              <FaGoogle className="cursor-pointer hover:text-black transition-colors duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuideCards;
