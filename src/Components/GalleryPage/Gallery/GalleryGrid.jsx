import React from "react";
import Gallay1 from "../../../assets/GalleryImg/img1.jpg";
import Gallay2 from "../../../assets/GalleryImg/img2.jpg";
import Gallay3 from "../../../assets/GalleryImg/img3.jpg";
import Gallay4 from "../../../assets/GalleryImg/img4.jpg";
import Gallay5 from "../../../assets/GalleryImg/img5.jpg";

const images = [Gallay1, Gallay2, Gallay5, Gallay2, Gallay5, Gallay4, Gallay5, Gallay1, Gallay2,Gallay1, Gallay2, Gallay5, Gallay2, Gallay5, Gallay4, Gallay5, Gallay1, Gallay2,];


const GalleryGrid = () => {
  return (
    <div className="container py-14 columns-2 md:columns-3 gap-4">
      {images.map((image, index) => (
        <div className="overflow-hidden rounded-lg shadow-md mb-4">
          <img key={index} src={image} alt="" className="w-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
