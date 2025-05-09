import React from "react";
import PrimaryBtn from "../../../share/PrimaryBtn";
import Destination1 from "../../../assets/HomeImg/Destination/Destination1.png";
import Destination2 from "../../../assets/HomeImg/Destination/Destination2.png";
import Destination3 from "../../../assets/HomeImg/Destination/Destination3.png";
import { IoLocationOutline } from "react-icons/io5";

const DestinationData = [
  {
    id: 1,
    title: "Phi Phi Island",
    location: "Srilanka",
    oldPrice: "$20",
    newPrice: "$16",
    rating: 5,
    img: Destination1,
  },
  {
    id: 2,
    img: Destination2,
    title: "Gateway of India",
    location: "Maharastra, India",
    oldPrice: null,
    newPrice: "$18",
    rating: 5,
  },
  {
    id: 3,
    img: Destination3,
    title: "Tower Bridge",
    location: "London, England",
    oldPrice: "$20",
    newPrice: "$16",
    rating: 5,
  },
  {
    id: 1,
    title: "Phi Phi Island",
    location: "Srilanka",
    oldPrice: "$20",
    newPrice: "$16",
    rating: 5,
    img: Destination1,
  },
  {
    id: 2,
    img: Destination2,
    title: "Gateway of India",
    location: "Maharastra, India",
    oldPrice: null,
    newPrice: "$18",
    rating: 5,
  },
  {
    id: 3,
    img: Destination3,
    title: "Tower Bridge",
    location: "London, England",
    oldPrice: "$20",
    newPrice: "$16",
    rating: 5,
  },
];

const DestinationCard = () => {
  return (
    <section className="py-10 ">
      <div data-aos="fade-left" data-aos-duration="500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-24 relative z-10">
        {DestinationData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center justify-start group  "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-white py-5 px-4 w-11/12 sm:w-11/12 mx-auto absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 rounded-xl shadow-lg transition duration-300">
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="font-bold text-lg text-gray-800">
                    {item.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-lg font-semibold text-gray-900">
                      {item.newPrice}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col sm:justify-between gap-3 mt-2">
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <IoLocationOutline className="text-primary" />
                      {item.location}
                    </p>
                    <div className="flex">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.624a1 1 0 00.95.69h3.804c.969 0 1.371 1.24.588 1.81l-3.073 2.23a1 1 0 00-.364 1.118l1.18 3.623c.3.921-.755 1.688-1.538 1.118l-3.073-2.23a1 1 0 00-1.175 0l-3.073 2.23c-.783.57-1.838-.197-1.538-1.118l1.18-3.623a1 1 0 00-.364-1.118l-3.073-2.23c-.783-.57-.38-1.81.588-1.81h3.804a1 1 0 00.95-.69l1.18-3.624z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                  <div className="pt-3">
                    <PrimaryBtn className="hover:bg-secondary duration-300 transition sm:w-auto text-center">
                      Book Now
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCard;
