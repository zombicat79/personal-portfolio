import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import infoItems from './../../../data/info-items';

function milestoneSlider(props) {
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
            {
                infoItems[props.activeSubsection].map((el) => {
                    if (el.moment === props.moment) {
                        let itemState = el.name === props.activeInfoItem ? "active" : "inactive";

                        return (
                            <div key={el.id} className="slider-item">
                                {   
                                    el.imgType === "background" &&
                                    <div 
                                        className={`slider-clickableElement slider-clickableElement--${el.name} ${itemState}`}
                                        onClick={(e) => props.handleActiveInfoItem(el.name)}>
                                            <p className="item-name">{el.name}</p>
                                    </div>
                                }
                                {   
                                    el.imgType === "element" &&
                                    <div 
                                        className={`slider-clickableElement--imgWrapper ${itemState}`}
                                        onClick={(e) => props.handleActiveInfoItem(el.name)}>
                                            <img src={el.src} alt={el.name}/>
                                    </div>
                                }
                            </div>
                        )
                    }
                    return null;
                })
            }
        </Slider>
    )
}

export default milestoneSlider;