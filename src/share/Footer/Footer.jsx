import React from "react";
import Logo from "../../assets/Png/Logo2.svg";
import Footerimg from "../../assets/HomeImg/FooterImg.png";
import viman from "../../assets/Png/Viman.svg";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router";

const BgStyle = {
  backgroundImage: `url(${Footerimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const NavData = [
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Gallery", link: "/gallery" },
  { id: 5, name: "Login", link: "/login" },
];

const Footer = () => {
  return (
    <section style={BgStyle} className="text-white">
      <div data-aos="fade-up" className="container py-12 md:py-12 lg:pt-24">
        {/* Grid Section */}
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            <img src={Logo} alt="Company Logo" className="w-32 md:w-40" />
            <p className="text-sm md:text-base leading-7 max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <div className="flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-primary transition-all duration-300" />
              <AiFillInstagram className="cursor-pointer hover:text-primary transition-all duration-300" />
              <RiWhatsappFill className="cursor-pointer hover:text-primary transition-all duration-300" />
              <FaGoogle className="cursor-pointer hover:text-primary transition-all duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:text-center flex flex-col items-start sm:items-start lg:items-center space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">Quick Links</h2>
            <ul className="space-y-3 text-sm md:text-base">
              {NavData.map((item) => (
                <li key={item.id} className="hover:text-primary transition-all duration-300">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold text-primary">Sign up for newsletter</h2>
            <div className="flex items-center border-b-2 border-gray-700 text-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent text-white placeholder-gray-300 py-2 w-full focus:outline-none text-xs sm:text-sm"
              />
              <button className="flex items-center gap-2 px-2 py-1 hover:scale-105 transition duration-300">
                Subscribe
                <img src={viman} alt="Send Icon" className="w-8 sm:w-10" />
              </button>
            </div>
            <label className="flex items-start sm:items-center gap-2 text-xs sm:text-sm mt-2 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 mt-1 sm:mt-0" />
              I agree to the privacy policy
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved | Your Company Name
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
