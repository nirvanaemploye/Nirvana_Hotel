import React from "react";
import Header from "../../../assets/GalleryImg/GalleryHeader.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const bgStyle = {
  backgroundImage: `url(${Header})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const GalleryHeader = () => {
  return (
    <section id="about">
      <div className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]" style={bgStyle}>
        <div className="bg-black/40 h-full flex flex-col items-center justify-center text-white text-center px-4 space-y-4">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold">Gallery</h1>
          <div data-aos="fade-up">
            <p className="text-sm sm:text-base font-medium flex items-center justify-center gap-x-2">
              <Link
                to="/"
                className="hover:text-primary transition-colors duration-200 text-white"
                aria-label="Go to Home"
              >
                Home
              </Link>
              <span>
                <IoIosArrowForward />
              </span>
              Blog
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeader;
