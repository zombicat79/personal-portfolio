import React, {useState} from 'react';

function RangeSlider(props) {
    const [inputValue, setInputValue] = useState(props.initialStep + 1);
    const [output, setOutput] = useState(props.stepOptions[props.initialStep]);
    
    const handleChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
        setOutput(props.stepOptions[value - 1])
    }
    
    return (
        <div className="u-viewport-center">
            <output id={props.name + "-slider-output"} className="slider__output">{output}</output>
            <input 
                type="range" 
                min={props.min} 
                max={props.max}
                className={"slider--" + props.size}
                value={inputValue}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default RangeSlider;