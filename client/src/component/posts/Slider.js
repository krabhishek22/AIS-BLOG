import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../images/login.jpg"
import img2 from "../../images/unnamed.jpg"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div className="slider">
            <img src={img1} alt="banner_img" />
          </div>
          <div className="slider">
          <img src={img2} alt="banner_img" />
          </div>
          <div className="slider">
          <img src={img1} alt="banner_img" />
          </div>
          
        </Slider>
      </div>
    );
  }
}