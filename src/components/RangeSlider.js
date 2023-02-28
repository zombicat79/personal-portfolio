import React, { useEffect, useState, useContext } from 'react';

import { LangContext } from './../App';
import rangesliderTexts from './../texts/rangeSlider_texts';

function RangeSlider(props) {
    const language = useContext(LangContext);

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
    const [output, setOutput] = useState(props.stepOptions[props.initialStep]);
    
    const handleChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
        setOutput(props.stepOptions[value - 1]);
        props.handleTimeline(value);
        switch(props.activeSubsection) {
            case "location":
                if (value === "1") {
                    props.handleActiveInfoItem("barcelona");
                } else if (value === "2") {
                    props.handleActiveInfoItem("dubai");
                } else {
                    props.handleActiveInfoItem("world");
                }
                break;
            default:
        }
    }
    
    return (
        <section className={"slider-section" + " " + "slider-section--"+componentVisibility}>
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