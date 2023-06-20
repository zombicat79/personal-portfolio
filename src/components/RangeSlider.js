import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { LangContext } from './../App';
import rangesliderTexts from './../texts/rangeSlider_texts';

function RangeSlider(props) {
    const language = useContext(LangContext);
    const location = useLocation();

    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }
    useEffect(() => {
        setTimeout(() => {
            handleVisibility("appearing");
        }, 2000);
    })

    const [inputValue, setInputValue] = useState(props.initialStep + 1);
    
    const handleChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
        props.handleTimeline(value);
        switch(props.activeSubsection) {
            case "education":
                if (value === "1") {
                    props.handleActiveInfoItem("criminology");
                } else if (value === "2") {
                    props.handleActiveInfoItem("coding");
                } else {
                    props.handleActiveInfoItem("future-coding");
                }
                break;
            case "location":
                if (value === "1") {
                    props.handleActiveInfoItem("barcelona");
                } else if (value === "2") {
                    props.handleActiveInfoItem("dubai");
                } else {
                    props.handleActiveInfoItem("world");
                }
                break;
            case "work":
                if (value === "1") {
                    props.handleActiveInfoItem("supermarket");
                } else if (value === "2") {
                    props.handleActiveInfoItem("atoom");
                } else {
                    props.handleActiveInfoItem("next-job");
                }
                break;
            case "projects":
                if (value === "1") {
                    props.handleActiveInfoItem("appventure");
                } else if (value === "2") {
                    props.handleActiveInfoItem("covid");
                } else {
                    props.handleActiveInfoItem("spaceline");
                }
                break;
            default:
        }
    }

    useEffect(() => {
        if (location.search.includes("projects")) {
            setInputValue("2");
        } else {
            switch(props.moment) {
                case "past":
                    setInputValue("1");
                    break;
                case "present":
                    setInputValue("2");
                    break;
                default:
                    setInputValue("3");
            }
        }
    }, [])
    
    return (
        <section className={`slider-section slider-section--${componentVisibility}`}>
            <div className="slider__wrapper u-relative-center">
                <input 
                    type="range" 
                    min={props.min} 
                    max={props.max}
                    className={"slider__input--" + props.size}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                />
                <output id={props.name + "-slider-output"} className="slider__output">{rangesliderTexts[inputValue-1][language]}</output>
            </div>
        </section>
    )
}

export default RangeSlider;