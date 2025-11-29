import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../../assets/banner/banner1.png";
import image2 from "../../../assets/banner/banner2.png";
import image3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
            </Carousel>
  );
};

export default Banner;
