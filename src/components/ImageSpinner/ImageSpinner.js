import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageSpinner.css";

export default class ImageSpinner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className='spinner-container'>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div className='slide-1'>
            <img src={`https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be3aa106f944edc77c68fcd567c22bbb&auto=format&fit=crop&w=800&q=60`}
            />
          </div>
          <div>
            <h3 className='slide-2'></h3>
          </div>
          <div>
            <h3 className='slide-3'></h3>
          </div>
          <div>
            <h3 className='slide-4'></h3>
          </div>
          <div>
            <h3 className='slide-5'></h3>
          </div>
        </Slider>
      </div>
    );
  }
}