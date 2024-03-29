import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import zombiecatTexts from './../texts/ZombieCat_texts';

import instagramLogo from './../images/logos/instagram-logo.png';

function ZombieCat(props) {
    const language = useContext(LangContext);

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

    // Determines what to show within laserbox element, depending on mouse hovering: TEXT or COVER IMAGES
    const [content, setContent] = useState({cover: "u-visible--zombiecat", page1: "u-invisible--zombiecat", page2: "u-invisible--zombiecat"})
    const handleContent = (contentType) => {
        if (contentType === "text") {
            setContent({cover: "u-invisible--zombiecat", page1: "u-visible--zombiecat", page2: "u-visible--zombiecat"});
        } else {
            setContent({cover: "u-visible--zombiecat", page1: "u-invisible--zombiecat", page2: "u-invisible--zombiecat"});
        }
    }

    const [easterEgg, setEasterEgg] = useState(false)
    const handleEasterEgg = () => {
        setEasterEgg((prevState) => {
            return !prevState;
        })
    }

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
            <LaserBox handleContent={handleContent}>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--zombiecat laserbox__content-wrapper--${contentState}`}>
                    {content.cover === "u-visible--zombiecat" &&
                        <div className={`laserbox__content-section laserbox__content-section--cat ${content.cover}`}></div>
                    }
                    
                    {content.cover === "u-invisible--zombiecat" &&
                        <>
                            {!easterEgg &&
                                <div className={`laserbox__content-section ${content.page1}`}>
                                    <h1 className="laserbox__paragraph--italic laserbox__paragraph--huge laserbox__paragraph--shiny">{zombiecatTexts.name[language]}</h1>
                                    <br></br>
                                    <p className="laserbox__paragraph">
                                        <span className="laserbox__paragraph__chunk">{zombiecatTexts.explanationP1.firstHalf[language]}</span>
                                        <span className="laserbox__paragraph__chunk laserbox__paragraph--italic laserbox__paragraph--huge laserbox__paragraph--shiny">{zombiecatTexts.explanationP1.secondHalf[language]}</span>
                                    </p>
                                    <br></br>
                                    <p className="laserbox__paragraph">
                                        <span className="laserbox__paragraph__chunk">{zombiecatTexts.explanationP2[language]}</span>
                                        <span className="laserbox__paragraph__chunk laserbox__link">
                                            <a href="https://github.com/zombicat79" target="_blank" rel="noreferrer">{zombiecatTexts.explanationP2link[language]}</a>
                                        </span>
                                    </p>
                                    <br></br>
                                    <p className="laserbox__paragraph">{zombiecatTexts.explanationP3[language]}</p>
                                    <br></br>
                                    <p className="laserbox__paragraph">{zombiecatTexts.explanationP4[language]}</p>
                                    <br></br>
                                    <p className="laserbox__link u-margin-bottom-big" onClick={() => handleEasterEgg()}>
                                        <span className="laserbox__paragraph__chunk">{zombiecatTexts.explanationP5[language]}</span>
                                    </p>
                                    <p className="laserbox__paragraph laserbox__paragraph--separated">{zombiecatTexts.logoOrigin[language]}</p>
                                    <br></br>
                                    <p className="laserbox__paragraph--italic">{zombiecatTexts.logoPrompt[language]}</p>
                                </div>
                            }

                            {easterEgg &&
                                <div className={`laserbox__content-section laserbox__content-section--cat-stars ${content.page2}`}>
                                    <p className="laserbox__link" onClick={() => handleEasterEgg()}>
                                        <span>{"\u2190"} {zombiecatTexts.backBtn[language]}</span>
                                    </p>
                                    <a href="https://www.instagram.com/msudrawings/" target="_blank" rel="noreferrer" class="laserbox__mention">
                                        <p className="laserbox__paragraph--italic">{zombiecatTexts.credits[language]} Marc Solé Giménez</p>
                                        <div className="u-flex">
                                            <img className="laserbox__logoItem laserbox__logoItem--tiny" src={instagramLogo} alt="Instagram"/>
                                            <p className="u-margin-left-tiny">@msudrawings</p>
                                        </div>
                                    </a>
                                </div>
                            }
                        </>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default ZombieCat;