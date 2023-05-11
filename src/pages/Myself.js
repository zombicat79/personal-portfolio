import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import myselfTexts from './../texts/Myself_texts';

function Myself(props) {
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
    const [contentVisibility, setContentVisibility] = useState({cover: "u-visible", page1: "u-invisible", page2: "u-invisible"})
    const handleContent = (contentType) => {
        if (contentType === "text") {
            setContentVisibility({cover: "u-invisible", page1: "u-visible", page2: "u-visible"});
        } else {
            setContentVisibility({cover: "u-visible", page1: "u-invisible", page2: "u-invisible"});
        }
    }

    // Selects which piece of TEXT content to show within laserbox element
    const [contentOnshow, setContentOnshow] = useState("page1");
    const handleContentOnshow = () => {
        setContentOnshow((prevState) => {
            if (prevState === "page1") return "page2";
            if (prevState === "page2") return "page1";
        })
        handleBtnReturn(true);
    }

    // Manages cat-button click (visual appearance + content management)
    const [btnState, setBtnState] = useState(false);
    const handleBtnState = () => {
        setTimeout(() => {
            // Button retreat effect after click
            setBtnState((prevState) => {
                return !prevState;
            })
            handleBtnReturn(false);
        }, 750);
        setBtnState((prevState) => {
            return !prevState;
        });
    }
    useEffect(() => {
        if (!btnReturned) {
            handleContentOnshow();
        }
    }, [btnState])

    // Checks whether cat-button is changing because it's actually being pressed or because it is retreating into initial position
    const [btnReturned, setBtnReturned] = useState(false);
    const handleBtnReturn = (booleanValue) => {
        setBtnReturned(booleanValue);
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
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    <div className={`laserbox__content-section ${contentVisibility.cover}`}>
                        <p>Hello</p>
                    </div>
                    
                    {contentOnshow === "page1" &&
                        <div className={`laserbox__content-section ${contentVisibility.page1}`}>
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
                            <p className="laserbox__paragraph--separated">{myselfTexts.pathway[language]}</p>
                            <br></br>
                        </div>
                    }

                    {contentOnshow === "page2" &&
                        <div className={`laserbox__content-section ${contentVisibility.page2}`}>
                            <h2 className="laserbox__paragraph">{myselfTexts.thingsLiked.intro[language]}</h2>
                            <br></br>
                            <h2 className="laserbox__paragraph">{myselfTexts.thingsInterested.intro[language]}</h2>
                            <br></br>
                            <h2 className="laserbox__paragraph">{myselfTexts.thingsInterested.intro[language]}</h2>
                        </div>
                    }

                    {contentVisibility.cover === "u-invisible" &&
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