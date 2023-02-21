import React, { useState, useEffect, useContext } from 'react';

import { LangContext } from "./../App";
import displayTexts from "./../texts/displaySection_texts";

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
                <div className={"display-section__left" + " " + "display-section__half" + " " + "display-section__left--"+props.subsection+"--"+props.moment}></div>
                    
                <div className="display-section__right display-section__half">
                    <div className="display-section__iconMenu">
                        <i id="icon-overview" className="menuElement icon-basic-home"></i>
                        <i id="icon-education" className="menuElement icon-basic-book-pen"></i>
                        <i id="icon-work" className="menuElement icon-basic-gear"></i>
                        <img id="icon-home" className="menuElement" src={props.logoSrc} alt={props.logoAlt} onClick={(e) => props.handleHeaderState()} />
                        <i id="icon-projects" className="menuElement icon-basic-lightbulb"></i>
                        <i id="icon-location" className="menuElement icon-basic-geolocalize-01"></i>
                    </div>

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