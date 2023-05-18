import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import reactLogo from './../images/logos/logo192.png';
import sassLogo from './../images/logos/sass-logo.png';
import slickLogo from './../images/logos/slick-logo.png';

import pageTexts from './../texts/ThePage_texts';

function ThePage(props) {
    const language = useContext(LangContext);

    let personalizedAddress = "";
    switch(language) {
        case "cat":
            personalizedAddress = props.methods.personalizeParagraph("name", "Veuràs", pageTexts.purpose[language]);
            break;
        case "esp":
            personalizedAddress = props.methods.personalizeParagraph("name", "Verás", pageTexts.purpose[language]);
            break;
        default:
            personalizedAddress = props.methods.personalizeParagraph("name", "You see", pageTexts.purpose[language]);
    }

    // Controls content fade-in effect on first render
    const [contentState, setContentState] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setContentState("appearing");
            setTimeout(() => {
                setContentState("visible");
            }, 3000)
        }, 6000)
    }, [])

    // Adjusts component styling on render (corrects styles trailing from WelcomeSeal component)
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

    return (
        <section className="page-body">
            <LaserBox>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    <h2 className="laserbox__paragraph">{personalizedAddress}</h2>
                    <br></br>
                    <div>
                        <span className="laserbox__chunk laserbox__link">
                            <Link to="/?projects">{pageTexts.mainLink[language]}</Link>
                        </span>
                        <span className="laserbox__chunk">
                            <p>{pageTexts.purposeEnd[language]}</p>
                        </span>
                    </div>
                    <br></br>
                    <p>{pageTexts.technicalAspects[language]}</p>
                    <br></br>
                    <div className="laserbox__logoBox">
                        <a href="https://react.dev/" target="_blank" rel="noreferrer">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={reactLogo} alt="React" />
                        </a>
                        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={sassLogo} alt="Sass"/>
                        </a>
                        <a href="https://kenwheeler.github.io/slick/" target="_blank" rel="noreferrer">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={slickLogo} alt="Slick.js"/>
                        </a>
                    </div>
                    <br></br>
                    <div>{pageTexts.githubPromptStart[language]}
                        <span className="laserbox__chunk laserbox__link">
                            <a href="https://github.com/zombicat79/personal-portfolio" target="_blank" rel="noreferrer">{pageTexts.githubLink[language]}</a>
                        </span>
                        <span className="laserbox__chunk">
                            <p>{pageTexts.githubPromptEnd[language]}</p>
                        </span>
                    </div>
                    <br></br>
                    <div>
                        <span className="laserbox__chunk laserbox__link">
                            <p>{pageTexts.assetsBtn[language]}</p>
                        </span>
                        <span className="laserbox__chunk">
                            <p>{pageTexts.assetsPrompt[language]}</p>
                        </span>
                    </div>
                </div>
            </LaserBox>
        </section>
    )
}

export default ThePage;