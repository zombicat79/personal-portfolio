import React, { useState, useEffect } from 'react';

import Overview from './subcomponents/display/Overview';
import LocationBarcelona from './subcomponents/display/LocationBarcelona';
import LocationDubai from './subcomponents/display/LocationDubai';
import LocationFuture from './subcomponents/display/LocationFuture';

function DisplaySection(props) {
    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }

    const [menuStatus, setMenuStatus] = useState({
        overview: "active",
        education: "",
        work: "",
        projects: "",
        location: ""
    });
    const handleMenuStatus = (newActiveIcon) => {
        setMenuStatus(() => {
            for (let iconType in menuStatus) {
                if (iconType === newActiveIcon) {
                    menuStatus[iconType] = "active";
                } else {
                    menuStatus[iconType] = "";
                }
            }
            return menuStatus;
        })
    }

    // Function used to include the visitor's name in selected content paragraphs
    const personalizeParagraph = (searchTerm, paragraph) => {
        return paragraph.replace(searchTerm, `${searchTerm}, ${props.visitorInfo.name},`)
    }

    useEffect(() => {
        /* setTimeout(() => {
            props.handleMainComponentsVisibility("display");
        }, 1000); */
        
        setTimeout(() => {
            handleVisibility("appearing");
        }, 1000);
    });
    
    useEffect(() => {
        const layers = Array.from(document.querySelectorAll("html, body, #root, .App"));
        console.log(layers)
        layers.forEach((item, index) => {
            console.log(item.nodeName)
            item.style.height = "initial";
            if (item.nodeName === "HTML") {
                item.style.padding = "0 2.5rem";
            }
            if (item.className === "App") {
                item.style.overflow = "auto";
            }
        })
    })

    return (
        <section className={"display-section" + " " + "display-section--"+componentVisibility}>
            <div className="display-section__body">
                <div className={"display-section__left" + " " + "display-section__half" + " " + "display-section__left--"+props.activeSubsection+"--"+props.moment}></div>
                    
                <div className="display-section__right display-section__half">
                    <div className="display-section__iconMenu">
                        <i 
                            id="icon-overview" className={"menuElement" + " " + "icon-basic-home" + " " + menuStatus.overview}
                            onClick={(e) => {handleMenuStatus("overview"); props.handleActiveSubsection("home")}}>
                        </i>
                        <i 
                            id="icon-education" className={"menuElement" + " " + "icon-basic-book-pen" + " " + menuStatus.education} 
                            onClick={(e) => {handleMenuStatus("education"); props.handleActiveSubsection("education")}}>
                        </i>
                        <i 
                            id="icon-work" className={"menuElement" + " " + "icon-basic-gear" + " " + menuStatus.work} 
                            onClick={(e) => {handleMenuStatus("work"); props.handleActiveSubsection("work")}}> 
                        </i>
                        <img id="icon-home" className="menuElement" src={props.logoSrc} alt={props.logoAlt} onClick={(e) => props.handleHeaderState()} />
                        <i 
                            id="icon-projects" className={"menuElement" + " " + "icon-basic-lightbulb" + " " + menuStatus.projects} 
                            onClick={(e) => {handleMenuStatus("projects"); props.handleActiveSubsection("projects")}}> 
                        </i>
                        <i 
                            id="icon-location" className={"menuElement" + " " + "icon-basic-geolocalize-01" + " " + menuStatus.location} 
                            onClick={(e) => {
                                handleMenuStatus("location"); 
                                props.handleActiveSubsection("location");
                                switch(props.moment) {
                                    case "past":
                                        props.handleActiveInfoItem("barcelona");
                                        break;
                                    case "present":
                                        props.handleActiveInfoItem("dubai");
                                        break;
                                    default:
                                        props.handleActiveInfoItem("world");
                                }
                            }}>
                        </i>
                    </div>

                    {props.activeSubsection === "home" && <Overview visitorInfo={props.visitorInfo}/>}
                    {props.activeSubsection === "location" && props.activeInfoItem === "barcelona" && <LocationBarcelona />}
                    {/* props.activeSubsection === "location" && props.activeInfoItem === "manchester" && <LocationPast /> */}
                    {props.activeSubsection === "location" && props.activeInfoItem === "dubai" && <LocationDubai visitorInfo={props.visitorInfo} personalizeParagraph={personalizeParagraph}/>}
                    {props.activeSubsection === "location" && props.activeInfoItem === "world" && <LocationFuture />}
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;