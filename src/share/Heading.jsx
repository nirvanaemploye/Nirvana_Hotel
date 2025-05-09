import React from "react";
import Logo from "../assets/Png/Air.svg";

const Heading = ({ title, heading, className = "", align = "" }) => {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignment} ${className} py-6 space-y-4 sm:space-y-6`}>
      <p data-aos="fade-up" className="text-sm sm:text-lg text-primary flex items-center gap-2">
        <img
          src={Logo}
          alt="Air logo"
          className="w-5 h-5 object-contain"
        />
        <span>{title}</span>
      </p>
      <h1 data-aos="fade-up" data-aos-delay="400" className="font-bold text-3xl sm:text-4xl lg:text-[40px] 2xl:text-5xl leading-tight">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
