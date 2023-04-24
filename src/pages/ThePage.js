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
            personalizedAddress = props.methods.personalizeParagraph("name", "Molt bé", pageTexts.purpose[language]);
            break;
        case "esp":
            personalizedAddress = props.methods.personalizeParagraph("name", "Genial", pageTexts.purpose[language]);
            break;
        default:
            personalizedAddress = props.methods.personalizeParagraph("name", "All right", pageTexts.purpose[language]);
    }

    const [contentState, setContentState] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setContentState("appearing");
            setTimeout(() => {
                setContentState("visible");
            }, 3000)
        }, 6000)
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

    return (
        <section className="page-body">
            <LaserBox>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    <h2 className="laserbox__paragraph">{personalizedAddress}
                        <span className="laserbox__chunk laserbox__link">
                            <Link to="/?projects">{pageTexts.mainLink[language]}</Link>
                        </span>
                        <span className="laserbox__chunk">
                            <p>{pageTexts.purposeEnd[language]}</p>
                        </span>
                    </h2>
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
                    <p>{pageTexts.githubPrompt[language]}</p>
                    <br></br>
                    <p>{pageTexts.assetsPrompt[language]}</p>
                </div>
            </LaserBox>
        </section>
    )
}

export default ThePage;