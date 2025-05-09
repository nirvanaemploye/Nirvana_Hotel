import React from "react";
import profile from "../../../assets/HomeImg/ProFile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comma from "../../../assets/HomeImg/Comma_icon.png";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

const Data = [
  {
    id: 1,
    img: profile,
    name: "Domenic Allen",
    subtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
  },
  {
    id: 2,
    img: profile,
    name: "Domenic Allen",
    subtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
  },
  {
    id: 3,
    img: profile,
    name: "Domenic Allen",
    subtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
  data-aos="fade-left"
    onClick={onClick}
    className="hidden md:block bg-primary text-white p-3 md:p-4 rounded-full absolute -left-4 md:-left-24 top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-200 hover:scale-110 hover:bg-primary/80 shadow-lg shadow-primary/80"
  >
    <RxArrowLeft className="text-2xl md:text-4xl" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
  data-aos="fade-right"
    onClick={onClick}
    className="hidden md:block bg-primary text-white p-3 md:p-4 rounded-full absolute -right-4 md:-right-24 top-1/2 transform -translate-y-1/2 z-10 transition-transform duration-200 hover:scale-110 hover:bg-primary/80 shadow-lg shadow-primary/80"
  >
    <RxArrowRight className="text-2xl md:text-4xl" />
  </button>
);

const settings = {
  lazyLoad: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  pauseOnHover: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const MultiCard = () => {
  return (
    <div className="container py-12 ">
      <Slider {...settings}>
        {Data.map((item, index) => (
          <div key={index} className="p-4">
            <div data-aos="zoom-in" className="bg-white px-6 py-10 sm:px-10 md:p-20 mx-auto max-w-6xl rounded-lg shadow-xl text-center space-y-4 relative">
              <img src={comma} alt="Quote icon" className="mx-auto w-8 md:w-10" />
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed md:leading-9 max-w-xl mx-auto pb-5">
                {item.subtext}
              </p>
              <h2 className="text-lg md:text-2xl font-semibold mt-2">{item.name}</h2>
            </div>
            <img
            data-aos="fade-down"
            data-aos-offset="100"
              src={item.img}
              alt={item.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mt-6 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiCard;
