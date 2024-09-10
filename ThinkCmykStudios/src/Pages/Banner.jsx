import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerOne from '/assets/img/banner-1.webp';
import BannerTwo from '/assets/img/banner-2.webp';
import BannerThree from '/assets/img/banner-3.webp';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 1000,   
  };

  const imagesArr = [BannerOne, BannerTwo, BannerThree];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imagesArr.map((ValueImage, index) => (
          <div className="img-container" key={index}>
            <img className="img-banner" src={ValueImage} alt={`${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
