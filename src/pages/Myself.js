import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import myselfTexts from './../texts/Myself_texts';

function Myself(props) {
    const language = useContext(LangContext);

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
            <LaserBox>
                <div className={`laserbox__content-wrapper`}>
                    <h2 className="laserbox__paragraph--italic">{myselfTexts.pitchP1[language]}</h2>
                    <br></br>
                    <p className="laserbox__paragraph--italic">{myselfTexts.pitchP2[language]}</p>
                    <br></br>
                    <p className="laserbox__paragraph--italic">{myselfTexts.pitchP3[language]}</p>
                    <br></br>
                    <h1 className="laserbox__paragraph--italic">{myselfTexts.pitchP4[language]}</h1>
                    <br></br>
                    <h2 className="laserbox__paragraph--italic">{myselfTexts.pitchP5[language]}</h2>
                    <br></br>
                    <p>{myselfTexts.pathway[language]}</p>
                    <br></br>
                    <button className="laserbox__button">
                        {!btnState && <img className="btn-enabled" src={props.assets.submitBtn} alt="Cat paw" />}
                        {btnState && <img className="btn-pressed" src={props.assets.submitBtnPressed} alt="Cat paw" />}
                    </button>
                </div>
            </LaserBox>
        </section>
    )
}

export default Myself;