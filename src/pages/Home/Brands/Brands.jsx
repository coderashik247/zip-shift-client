import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../../assets/brands/amazon.png";
import brand3 from "../../../assets/brands/casio.png";
import brand4 from "../../../assets/brands/moonstar.png";
import brand5 from "../../../assets/brands/randstad.png";
import brand6 from "../../../assets/brands/star.png";

const Brands = () => {
  return (
    <div className="my-10">
        <h2 className="font-extrabold text-2xl text-secondary text-center my-5">
            We've helped thousands of sales teams
        </h2>
      <Marquee>
        <div className="px-28">
            <img src={brand1} alt="" />
        </div>
        <div className="px-28">
            <img src={brand3} alt="" />
        </div>
        <div className="px-28">
            <img src={brand4} alt="" />
        </div>
        <div className="px-28">
            <img src={brand5} alt="" />
        </div>
        <div className="px-28">
            <img src={brand6} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
