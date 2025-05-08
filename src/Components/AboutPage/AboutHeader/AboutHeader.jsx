import React from "react";
import { Link } from "react-router-dom"; // Ensure this is installed
import Heder from "../../../assets/AboutImg/AboutHedar.png";
import { IoIosArrowForward } from "react-icons/io";

const bgStyle = {
  backgroundImage: `url(${Heder})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const AboutHeader = () => {
  return (
    <section id="about">
      <div className="h-[300px] md:h-[450px] lg:h-[550px]" style={bgStyle}>
        <div  className="bg-black/50 h-full flex flex-col items-center justify-center text-white text-center px-4 space-y-2 md:space-y-3">
          <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-[52px] font-semibold">
            About
          </h1>
          <div data-aos="fade-up">
            <p className="text-sm md:text-base font-medium flex items-center justify-center gap-x-2">
              <Link
                to="/"
                className=" hover:text-primary text-white transition-colors duration-200"
                aria-label="Navigate to Home"
              >
                Home
              </Link>
              <span>
                <IoIosArrowForward />
              </span>
              About
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
