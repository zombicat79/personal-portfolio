import React, { useState, useEffect, useContext } from 'react';

import Overview from './subcomponents/display/Overview';
import LocationPast from './subcomponents/display/LocationPast';
import LocationPresent from './subcomponents/display/LocationPresent';
import LocationFuture from './subcomponents/display/LocationFuture';

function DisplaySection(props) {
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
                <div className={"display-section__left" + " " + "display-section__half" + " " + "display-section__left--"+props.activeSubsection+"--"+props.moment}></div>
                    
                <div className="display-section__right display-section__half">
                    <div className="display-section__iconMenu">
                        <i id="icon-overview" className="menuElement icon-basic-home" onClick={(e) => props.handleActiveSubsection("home")}></i>
                        <i id="icon-education" className="menuElement icon-basic-book-pen" onClick={(e) => props.handleActiveSubsection("education")}></i>
                        <i id="icon-work" className="menuElement icon-basic-gear" onClick={(e) => props.handleActiveSubsection("work")}></i>
                        <img id="icon-home" className="menuElement" src={props.logoSrc} alt={props.logoAlt} onClick={(e) => props.handleHeaderState()} />
                        <i id="icon-projects" className="menuElement icon-basic-lightbulb" onClick={(e) => props.handleActiveSubsection("projects")}></i>
                        <i id="icon-location" className="menuElement icon-basic-geolocalize-01" onClick={(e) => props.handleActiveSubsection("location")}></i>
                    </div>

                    {props.activeSubsection === "home" && <Overview visitorInfo={props.visitorInfo}/>}
                    {props.activeSubsection === "location" && props.moment === "past" && <LocationPast />}
                    {props.activeSubsection === "location" && props.moment === "present" && <LocationPresent />}
                    {props.activeSubsection === "location" && props.moment === "future" && <LocationFuture />}
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;