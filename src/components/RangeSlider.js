import React, { useEffect, useState } from 'react';

function RangeSlider(props) {
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
        setOutput(props.stepOptions[value - 1])
    }
    
    return (
        <section className={"slider-section" + " " + "slider-section--"+componentVisibility}>
            <output id={props.name + "-slider-output"} className="slider__output">{output}</output>
            <input 
                type="range" 
                min={props.min} 
                max={props.max}
                className={"slider--" + props.size}
                value={inputValue}
                onChange={(e) => handleChange(e)}
            />
        </section>
    )
}

export default RangeSlider;