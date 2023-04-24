import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import myselfTexts from './../texts/Myself_texts';

function Myself(props) {
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

    const [content, setContent] = useState({cover: "u-visible", page1: "u-invisible", page2: "u-invisible"})
    const handleContent = (contentType) => {
        if (contentType === "text") {
            setContent({cover: "u-invisible", page1: "u-visible", page2: "u-visible"});
        } else {
            setContent({cover: "u-visible", page1: "u-invisible", page2: "u-invisible"});
        }
    }

    const [btnState, setBtnState] = useState(false);
    const handleBtnState = () => {
        setBtnState((prevState) => {
            return !prevState;
        })
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
                    <div className={`laserbox__content-section ${content.cover}`}>
                        <p>Hello</p>
                    </div>
                    
                    {!btnState &&
                        <div className={`laserbox__content-section ${content.page1}`}>
                            <h2 className="laserbox__paragraph--italic">{myselfTexts.pitchP1[language]}</h2>
                            <br></br>
                            <p className="laserbox__paragraph--italic">{myselfTexts.pitchP2[language]}</p>
                            <br></br>
                            <p className="laserbox__paragraph--italic">{myselfTexts.pitchP3[language]}</p>
                            <br></br>
                            <h1 className="laserbox__paragraph--italic">{myselfTexts.pitchP4[language]}</h1>
                            <br></br>
                            <h2 className="laserbox__paragraph--italic u-margin-bottom-big">{myselfTexts.pitchP5[language]}</h2>
                            <br></br>
                            <p>{myselfTexts.pathway[language]}</p>
                            <br></br>
                        </div>
                    }

                    {btnState &&
                        <div className={`laserbox__content-section ${content.page2}`}>
                            <h2 className="laserbox__paragraph--italic u-margin-bottom-big">{myselfTexts.pitchP5[language]}</h2>
                            <br></br>
                        </div>
                    }

                    {content.cover === "u-invisible" &&
                        <button className="laserbox__button">
                            {!btnState && <img className="btn-enabled" src={props.assets.submitBtn} alt="Cat paw" onClick={() => handleBtnState()} />}
                            {btnState && <img className="btn-pressed" src={props.assets.submitBtnPressed} alt="Cat paw" onClick={() => handleBtnState()} />}
                        </button>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default Myself;