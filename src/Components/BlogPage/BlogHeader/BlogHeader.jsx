import React from "react";
import Header from "../../../assets/BlogImg/BlogHeader.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"; // Optional, if using routing

const bgStyle = {
  backgroundImage: `url(${Header})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const BlogHeader = () => {
  return (
    <section id="blog">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]" style={bgStyle}>
        <div className="bg-black/30 h-full flex flex-col items-center justify-center text-white text-center px-4 space-y-2 md:space-y-3">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-[52px] font-semibold">Blog</h1>
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

export default BlogHeader;
