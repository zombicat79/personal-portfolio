import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import zombiecatTexts from './../texts/ZombieCat_texts';

function ZombieCat(props) {
    const language = useContext(LangContext);

    const [contentState, setContentState] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setContentState("appearing");
            setTimeout(() => {
                setContentState("visible");
            }, 3000)
        }, 6000)
    }, [])

    const [content, setContent] = useState({cover: "u-visible", page1: "u-invisible"})
    const handleContent = (contentType) => {
        if (contentType === "text") {
            setContent({cover: "u-invisible", page1: "u-visible"});
        } else {
            setContent({cover: "u-visible", page1: "u-invisible"});
        }
    }

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
            <LaserBox handleContent={handleContent}>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    {content.cover === "u-visible" &&
                        <div className={`laserbox__content-section laserbox__content-section--cat ${content.cover}`}></div>
                    }
                    
                    {content.cover === "u-invisible" &&
                        <div className={`laserbox__content-section ${content.page1}`}>
                            <h2 className="laserbox__paragraph--italic">{zombiecatTexts.pitchP1[language]}</h2>
                            <br></br>
                            <p className="laserbox__paragraph--italic">{zombiecatTexts.pitchP2[language]}</p>
                            <br></br>
                            <p className="laserbox__paragraph--italic">{zombiecatTexts.pitchP3[language]}</p>
                            <br></br>
                            <h1 className="laserbox__paragraph--italic">{zombiecatTexts.pitchP4[language]}</h1>
                            <br></br>
                            <h2 className="laserbox__paragraph--italic u-margin-bottom-big">{zombiecatTexts.pitchP5[language]}</h2>
                            <br></br>
                            <p className="laserbox__paragraph">{zombiecatTexts.logoOrigin[language]}</p>
                            <br></br>
                            <p className="laserbox__paragraph--italic">{zombiecatTexts.logoPrompt[language]}</p>
                        </div>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default ZombieCat;