import React, { useState, useEffect } from 'react';

import Overview from './subcomponents/display/Overview';
import EducationUB from './subcomponents/display/EducationUB';
import EducationUOC from './subcomponents/display/EducationUOC';
import EducationSalle from './subcomponents/display/EducationSalle';
import EducationIronhack from './subcomponents/display/EducationIronhack';
import LocationBarcelona from './subcomponents/display/LocationBarcelona';
import LocationManchester from './subcomponents/display/LocationManchester';
import LocationDubai from './subcomponents/display/LocationDubai';
import LocationWorld from './subcomponents/display/LocationWorld';
import LocationSpace from './subcomponents/display/LocationSpace';

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
    const personalizeParagraph = (insertInfo, searchTerm, paragraph) => {
        if (insertInfo === "name") {
            return paragraph.replace(searchTerm, `${searchTerm}, ${props.visitorInfo.name}`);
        } else {
            return paragraph.replace(searchTerm, `${searchTerm} ${props.visitorInfo.org}`);
        }
    }

    // Adjust component styling on render (correct styles from WelcomeSeal component)
    useEffect(() => {
        const layers = Array.from(document.querySelectorAll("html, body, #root, .App"));
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

    // Add fade in effect to component 
    useEffect(() => {
        setTimeout(() => {
            handleVisibility("appearing");
        }, 1000);
    });

    // Assign default component content on first render
    useEffect(() => {
        props.handleActiveInfoItem("home");
    }, [])

    // Scroll displayed text to the top on every render
    useEffect(() => {
        const textBox = document.querySelector(".display-section__right");
        textBox.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })

    return (
        <section className={`display-section display-section--${componentVisibility} display-section--${props.moment}`}>
            <div className="display-section__body">
                <div className="display-section__iconMenu">
                    <i 
                        id="icon-overview" className={`menuElement icon-basic-home ${menuStatus.overview}`}
                        onClick={(e) => {handleMenuStatus("overview"); props.handleActiveSubsection("home"); props.handleActiveInfoItem("home")}}>
                    </i>
                    <i 
                        id="icon-education" className={`menuElement icon-basic-book-pen ${menuStatus.education}`} 
                        onClick={(e) => {
                            handleMenuStatus("education"); 
                            props.handleActiveSubsection("education")
                            switch(props.moment) {
                                case "past":
                                    props.handleActiveInfoItem("criminology");
                                    break;
                                case "present":
                                    props.handleActiveInfoItem("coding");
                                    break;
                                default:
                                    props.handleActiveInfoItem("future-coding");
                            }
                        }}>
                    </i>
                    <i 
                        id="icon-work" className={`menuElement icon-basic-gear ${menuStatus.work}`} 
                        onClick={(e) => {
                            handleMenuStatus("work"); 
                            props.handleActiveSubsection("work")
                            switch(props.moment) {
                                case "past":
                                    props.handleActiveInfoItem("supermarket");
                                    break;
                                case "present":
                                    props.handleActiveInfoItem("supermarket");
                                    break;
                                default:
                                    props.handleActiveInfoItem("supermarket");
                            }
                        }}> 
                    </i>
                    <img id="icon-home" className="menuElement" src={props.logoSrc} alt={props.logoAlt} onClick={(e) => props.handleHeaderState()} />
                    <i 
                        id="icon-projects" className={`menuElement icon-basic-lightbulb ${menuStatus.projects}`} 
                        onClick={(e) => {handleMenuStatus("projects"); props.handleActiveSubsection("projects")}}> 
                    </i>
                    <i 
                        id="icon-location" className={`menuElement icon-basic-geolocalize-01 ${menuStatus.location}`} 
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

                <div className={`display-section__left display-section__half display-section__left--${props.moment} display-section__left--${props.activeSubsection}--${props.activeInfoItem}`}></div>
                    
                <div className="display-section__right display-section__half">
                    {props.activeSubsection === "home" && <Overview visitorInfo={props.visitorInfo}/>}
                    {props.activeSubsection === "education" && props.activeInfoItem === "criminology" && <EducationUB personalizeParagraph={personalizeParagraph} />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "tourism" && <EducationUOC />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "social-media" && <EducationSalle />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "coding" && <EducationIronhack personalizeParagraph={personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "barcelona" && <LocationBarcelona />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "manchester" && <LocationManchester />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "dubai" && <LocationDubai personalizeParagraph={personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "world" && <LocationWorld personalizeParagraph={personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "space" && <LocationSpace />}
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;