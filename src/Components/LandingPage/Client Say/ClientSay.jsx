import React from "react";
import Heading from "../../../share/Heading";
import MultiCard from "./MultiCard";

const ClientSay = () => {
  return (
    <section className="bg-primary/5">
      <div className="container py-24">
        <Heading title="Client Say" heading="What Our Guests Are Saying" />
        <p data-aos="zoom-in" className="text-center max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-4 text-sm md:text-base font-normal leading-relaxed text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <MultiCard />
      </div>
    </section>
  );
};

export default ClientSay;
