import React from "react";
import BlogImg1 from "../../../assets/HomeImg/Blog/Blog1.png";
import BlogImg2 from "../../../assets/HomeImg/Blog/Blog2.png";
import Heading from "../../../share/Heading";
import { GoDotFill } from "react-icons/go";
import PrimaryBtn from "../../../share/PrimaryBtn";
import Bench from "../../../assets/Png/Bench.png";

const Blog = () => {
  return (
    <section className="relative">
      <div data-aos="fade" className="container py-16 md:py-24 px-4 md:px-8 my-auto">
        {/* Background image */}
        <img
          src={Bench}
          alt=""
          className="absolute top-10 right-4 md:right-12 w-8 md:w-16 animate-pulse duration-1000 ease-in-out"
        />

        {/* Section heading */}
        <Heading title="Blog" heading="Upto date with our blogs" />

        {/* Blog content */}
        <div className="mt-14 xl:flex xl:gap-8 xl:items-start">
          {/* Featured blog post */}
          <div className="relative w-full xl:w-8/12 mx-auto group mb-10 xl:mb-0">
            <img
              src={BlogImg1}
              alt="Featured blog post"
              className="w-full rounded-tl-2xl rounded-br-2xl transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
              <div className="p-5 sm:p-7 md:p-10 text-white w-full">
                <div className="flex flex-wrap items-center gap-2 text-primary text-sm md:text-base">
                  <p>By John White</p>
                  <GoDotFill className="text-white" />
                  <p>4 Mar 2025</p>
                  <GoDotFill className="text-white" />
                  <p>6 comments</p>
                </div>
                <p className="mt-4 font-semibold text-base md:text-lg leading-snug">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4">
                  <PrimaryBtn className="w-1/2 sm:w-1/3">View Post</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>

          {/* Blog list */}
          <div className="flex flex-col gap-10 w-full items-center ">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col sm:flex-row shadow-lg rounded-br-2xl overflow-hidden group"
              >
                <img
                  src={BlogImg2}
                  alt="Blog post"
                  className="h-52 sm:h-auto sm:w-1/2 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5 sm:p-6 flex flex-col justify-between w-full">
                  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
                    <p>By John White</p>
                    <GoDotFill />
                    <p>4 Mar 2025</p>
                    <GoDotFill />
                    <p>6 comments</p>
                  </div>
                  <p className="mt-3 text-base sm:text-lg font-semibold leading-snug">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="mt-4">
                    <PrimaryBtn className="w-1/2 sm:w-1/3">
                      View Post
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
