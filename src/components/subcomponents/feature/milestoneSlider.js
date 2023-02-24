import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function milestoneSlider() {
    const settings = {
        appendArrows: document.querySelector(".feature-section"),
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    
    return (
        <Slider {...settings}>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
            <div className="slider-item">
                <a href="#" className="slider-clickableElement"></a>
            </div>
        </Slider>
    )
}

export default milestoneSlider;