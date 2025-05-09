import React from "react";
import Icon1 from "../../../assets/HomeImg/Highlight/H1.svg";
import Icon2 from "../../../assets/HomeImg/Highlight/H2.svg";
import Icon3 from "../../../assets/HomeImg/Highlight/H3.svg";


const Data = [
  {
    id: 1,
    img: Icon1,
    Title: "Best Price Gurantee",
    Desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    img: Icon2,
    Title: "Easy , Quick Booking",
    Desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 3,
    img: Icon3,
    Title: "24/7 Available",
    Desc: "Lorem Ipsum is simply dummy text of the printing",
  },
];
const Highlight = () => {
  return (
    <section className="xl:container py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 ">
        {Data.map((item) => (
          <div data-aos="zoom-in" data-aos-delay="300"  key={item.id} className="group p-5 sm:p-7 md:p-10 2xl:p-16 flex flex-col space-y-3 md:space-y-5 items-center justify-center text-center">
            <img  src={item.img} alt="" className="group-hover:scale-110 duration-300 animate-ease-in-out"/>
            <h1 data-aos="zoom-in" data-aos-delay="400" className="text-sm xl:text-lg font-semibold group-hover:text-primary">{item.Title}</h1>
            <p data-aos="zoom-in" data-aos-delay="600" className="text-gray-500 text-xs lg:text-base">{item.Desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlight;
