import React, { useState, useEffect, useContext } from 'react';

import { LangContext } from "./../App";
import displayTexts from "./../texts/displaySection_texts";

import dubaiPic from './../images/dubai.jpg'

function DisplaySection(props) {
    const language = useContext(LangContext)

    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }

    useEffect(() => {
        setTimeout(() => {
            handleVisibility("appearing");
        }, 1000);
    })
    
    return (
        <section className={"display-section" + " " + "display-section--"+componentVisibility}>
            <div className="display-section__body">
                <div className="display-section__left display-section__half">
                    
                </div>
                <div className="display-section__right display-section__half">
                    <p>{displayTexts.salute[language]} {props.visitorInfo.name}</p>
                    <br></br>
                    <p>{displayTexts.intro[language].paragraph1}</p>
                    <br></br>
                    <p>{displayTexts.intro[language].paragraph2}</p>
                    <br></br>
                    <p>{displayTexts.intro[language].paragraph3}</p>
                    <br></br>
                    <p>{displayTexts.intro[language].paragraph4}</p>
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;