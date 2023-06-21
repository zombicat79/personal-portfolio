import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Overview from './subcomponents/display/Overview';
import OverviewPast from "./subcomponents/display/OverviewPast";
import OverviewFuture from './subcomponents/display/OverviewFuture';

import EducationUB from './subcomponents/display/EducationUB';
import EducationUOC from './subcomponents/display/EducationUOC';
import EducationSalle from './subcomponents/display/EducationSalle';
import EducationIronhack from './subcomponents/display/EducationIronhack';
import EducationWWW from './subcomponents/display/EducationWWW';

import WorkDStore from './subcomponents/display/WorkDStore';
import WorkBeach from './subcomponents/display/WorkBeach';
import WorkKitchen from './subcomponents/display/WorkKitchen';
import WorkBar from './subcomponents/display/WorkBar';
import WorkAirport from './subcomponents/display/WorkAirport';
import WorkCallcenter from './subcomponents/display/WorkCallcenter';
import WorkHotel from './subcomponents/display/WorkHotel';
import WorkControlcenter from './subcomponents/display/WorkControlcenter';
import WorkAtoom from './subcomponents/display/WorkAtoom';
import WorkNext from './subcomponents/display/WorkNext';

import ProjectsAppventure from './subcomponents/display/ProjectsAppventure';
import ProjectsDreambig from './subcomponents/display/ProjectsDreambig';
import ProjectsPanicdemic from './subcomponents/display/ProjectsPanicdemic';
import ProjectsPhone from './subcomponents/display/ProjectsPhone';
import ProjectsCalculator from './subcomponents/display/ProjectsCalculator';
import ProjectsMemory from './subcomponents/display/ProjectsMemory';
import ProjectsSpaceline from './subcomponents/display/ProjectsSpaceline';

import LocationBarcelona from './subcomponents/display/LocationBarcelona';
import LocationManchester from './subcomponents/display/LocationManchester';
import LocationDubai from './subcomponents/display/LocationDubai';
import LocationWorld from './subcomponents/display/LocationWorld';
import LocationSpace from './subcomponents/display/LocationSpace';

function DisplaySection(props) {
    const location = useLocation();

    const [componentVisibility, setComponentVisibility] = useState("disappearing");
    const handleVisibility = (action) => {
        setComponentVisibility(action);
    }

    const [menuStatus, setMenuStatus] = useState({
        overview: "",
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

    // Adds hover event listeners to display menu icons
    useEffect(() => {
        const menuIcons = Array.from(document.querySelectorAll(".menuElement:not(#icon-overview)"));
        menuIcons.forEach((icon) => {
            icon.addEventListener("mouseover", function() {
                props.handleHoverSubsection(icon.id.substring(icon.id.indexOf("-") + 1));
            });
            icon.addEventListener("mouseout", function() {
                props.handleHoverSubsection("");
            })
        })
        return () => {
            menuIcons.forEach((icon) => {
                icon.removeEventListener("mouseover", function() {
                    props.handleHoverSubsection(icon.id.substring(icon.id.indexOf("-") + 1));
                });
                icon.removeEventListener("mouseout", function() {
                    props.handleHoverSubsection("");
                })
            })
        }
    }, [])

    // Adjust component styling on render (correct styles from WelcomeSeal component)
    useEffect(() => {
        const layers = Array.from(document.querySelectorAll("html, body, #root, .App"));
        layers.forEach((item, index) => {
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
        if (!props.activeSubsection) {
            props.handleActiveSubsection("home");
            props.handleActiveInfoItem("home");
            handleMenuStatus("overview");
        // Opens up on projects subsection when specifically directed
        } else if (location.search.includes("projects")) {
            props.handleTimeLine("2");
            props.handleActiveSubsection("projects");
            props.handleActiveInfoItem("covid");
            handleMenuStatus("projects");
            window.history.pushState({}, "", "/");
        } else {
            switch(props.activeSubsection) {
                case "education":
                    handleMenuStatus("education");
                    break;
                case "work":
                    handleMenuStatus("work");
                    break;
                case "projects":
                    handleMenuStatus("projects");
                    break;
                case "location":
                    handleMenuStatus("location");
                    break;
                default:
                    handleMenuStatus("overview");
            }
        }
    }, [])

    // Scroll displayed text to the top on moment, subsection or infoitem change
    useEffect(() => {
        const textBox = document.querySelector(".display-section__right");
        textBox.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [props.moment, props.activeSubsection, props.activeInfoItem])

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
                                    props.handleActiveInfoItem("atoom");
                                    break;
                                default:
                                    props.handleActiveInfoItem("next-job");
                            }
                        }}> 
                    </i>
                    <img id="icon-home" className="menuElement" src={props.logoSrc} alt={props.logoAlt} onClick={(e) => props.handleHeaderState()} />
                    <i 
                        id="icon-projects" className={`menuElement icon-basic-lightbulb ${menuStatus.projects}`} 
                        onClick={(e) => {
                            handleMenuStatus("projects"); 
                            props.handleActiveSubsection("projects")
                            switch(props.moment) {
                                case "past":
                                    props.handleActiveInfoItem("appventure");
                                    break;
                                case "present":
                                    props.handleActiveInfoItem("covid");
                                    break;
                                default:
                                    props.handleActiveInfoItem("spaceline");
                            }
                        }}> 
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
                    {props.activeSubsection === "home" && props.moment === "present" && <Overview visitorInfo={props.visitorInfo} hoverSubsection={props.hoverSubsection} />}
                    {props.activeSubsection === "home" && props.moment === "past" && <OverviewPast hoverSubsection={props.hoverSubsection} />}
                    {props.activeSubsection === "home" && props.moment === "future" && <OverviewFuture personalizeParagraph={props.personalizeParagraph} hoverSubsection={props.hoverSubsection} />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "criminology" && <EducationUB personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "tourism" && <EducationUOC />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "social-media" && <EducationSalle />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "coding" && <EducationIronhack personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "education" && props.activeInfoItem === "webcourses" && <EducationWWW personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "supermarket" && <WorkDStore />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "lifeguard" && <WorkBeach />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "kitchen" && <WorkKitchen />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "waiter" && <WorkBar />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "handling" && <WorkAirport />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "call-center" && <WorkCallcenter />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "hotel" && <WorkHotel />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "control" && <WorkControlcenter />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "atoom" && <WorkAtoom />}
                    {props.activeSubsection === "work" && props.activeInfoItem === "next-job" && <WorkNext visitorInfo={props.visitorInfo} />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "appventure" && <ProjectsAppventure />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "dreambig" && <ProjectsDreambig />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "covid" && <ProjectsPanicdemic handleActiveSubsection={props.handleActiveSubsection} handleActiveInfoItem={props.handleActiveInfoItem} handleMenuStatus={handleMenuStatus} />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "phone" && <ProjectsPhone personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "calculator" && <ProjectsCalculator personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "memory" && <ProjectsMemory />}
                    {props.activeSubsection === "projects" && props.activeInfoItem === "spaceline" && <ProjectsSpaceline personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "barcelona" && <LocationBarcelona />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "manchester" && <LocationManchester />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "dubai" && <LocationDubai personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "world" && <LocationWorld personalizeParagraph={props.personalizeParagraph} />}
                    {props.activeSubsection === "location" && props.activeInfoItem === "space" && <LocationSpace />}
                </div>
            </div>
        </section>
    )
}

export default DisplaySection;