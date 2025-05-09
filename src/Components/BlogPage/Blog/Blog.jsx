import React from "react";
import Heading from "../../../share/Heading";
import Blog1 from "../../../assets/BlogImg/Blog1.jpg";
import Blog2 from "../../../assets/BlogImg/Blog2.jpg";
import Air from "../../../assets/Png/Airplane.svg";
import balloon from "../../../assets/Png/balloon.svg";
import { FaCalendarCheck } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import Pagination from "../../../share/Pagination"; // Adjust path if needed
import { useState } from "react";
import { motion } from "framer-motion";

const Bblog = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Optional: scroll to top or fetch data
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="container py-24">
        <motion.img
                  src={Air}
                  alt=""
                  className="absolute top-10 left-4 sm:left-16 h-12 sm:h-[78px]"
                  animate={{ x: [0, 250, ], y: [0, -30, ] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
        {/* <Heading title="Blog" heading="Latest News" /> */}

        {/* Top Blog Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div data-aos="fade-right" className="lg:w-8/12 w-full shadow-xl flex flex-col gap-6 p-6 py-10">
            <p className="text-xl sm:text-2xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FaCalendarCheck className="text-primary" />
                12 / 6 / 2025
              </p>
              <p className="flex items-center gap-2">
                <BiSolidCommentDetail className="text-primary" />
                8 comments
              </p>
            </div>
            <img src={Blog1} alt="Blog 1" className="w-full h-auto rounded-lg" />
            <p className="text-gray-700 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...{" "}
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </p>
          </div>

          {/* Right Sidebar */}
          <div data-aos="fade-left" className="hidden lg:w-4/12 w-full lg:flex flex-col gap-6">
            {/* Help Box */}
            <div className="p-6 w-full flex flex-col gap-6 shadow-xl bg-white">
              <p className="text-lg font-semibold">Need Help Booking?</p>
              <div className="w-full h-px bg-gray-300" />
              <p className="leading-relaxed text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="flex items-center gap-3 text-lg font-semibold text-gray-800 mt-4">
                <IoMdCall className="text-primary text-2xl" />
                1800 2568 2154
              </p>
            </div>

            {/* Why Choose Us Box */}
            <div className="p-6 w-full flex flex-col gap-6 shadow-xl bg-white">
              <p className="text-lg font-semibold">Why Choose Us?</p>
              <div className="w-full h-px bg-gray-300" />
              {[
                { title: "Low Rates", desc: "Lorem Ipsum is simply dummy text of the printing industry." },
                { title: "Luxury Facilities", desc: "Lorem Ipsum is simply dummy text of the printing industry." },
                { title: "Free WiFi", desc: "Lorem Ipsum is simply dummy text of the printing industry." },
              ].map((item, index) => (
                <div key={index}>
                  <h2 className="text-primary text-base font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Blog Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-10 relative">
          {/* Left Blog Card */}
          <div data-aos="fade-right" className="lg:w-8/12 w-full shadow-xl flex flex-col gap-6 p-6 py-10">
            <p className="text-xl sm:text-2xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <FaCalendarCheck className="text-primary" />
                12 / 6 / 2025
              </p>
              <p className="flex items-center gap-2">
                <BiSolidCommentDetail className="text-primary" />
                8 comments
              </p>
            </div>
            <img src={Blog2} alt="Blog 2" className="w-full h-auto rounded-lg" />
            <p className="text-gray-700 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...{" "}
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </p>
          </div>

          {/* Spacer and Decoration */}
          <div className="lg:w-4/12 w-full relative">
          </div>
        </div>
            <motion.img
              src={balloon}
              alt="balloon"
              className="absolute right-16 -bottom-24 xl:bottom-1/4 h-12 sm:h-32"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
    </section>
  );
};

export default Bblog;
