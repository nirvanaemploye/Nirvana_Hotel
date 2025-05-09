import React from "react";
import HeaderImg from "../../../assets/HomeImg/Header.png";
// import Navbar from "../../Components/NavBar/Navbar";
import PrimaryBtn from "../../../share/PrimaryBtn";

const BgStyle = {
  backgroundImage: `url(${HeaderImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Header = () => {
  return (
    <section>
      <div data-aos="fade" style={BgStyle} className="">
        <div className="bg-gradient-to-r from-black/80 to-transparent  ">
          <div className="container py-28 ">
          <div className="space-y-8 text-white sm:w-1/2 text-center sm:text-left  ">
            <h1 data-aos="fade-right" className="text-5xl font-extrabold 2xl:leading-normal">Find Your Perfect Stay Book Now & Save Big.</h1>
            <p data-aos="fade-right" className="font-normal text-sm w-96 leading-8 mx-auto sm:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <PrimaryBtn delay={500} className="hover:bg-secondary transition duration-300" >Sing Up</PrimaryBtn>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
