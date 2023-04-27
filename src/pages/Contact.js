import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import whatsappLogo from './../images/logos/whatsapp-logo.png';
import linkedinLogo from './../images/logos/linkedin-logo.png';
import emailLogo from './../images/logos/email-logo.png';
import githubLogo from './../images/logos/github-logo.png';

import contactTexts from './../texts/Contact_texts';

function Contact() {
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
                    <div className="laserbox__logoBox">
                        <div className="laserbox__link">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={whatsappLogo} alt="React" />
                            <a href="https://wa.me/34654954559" target="_blank" rel="noreferrer">{contactTexts.whatsappPrompt[language]}</a>
                        </div>

                        <div className="laserbox__link">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={linkedinLogo} alt="React" />
                            <a href="https://www.linkedin.com/in/david-castejon-ferrer/" target="_blank" rel="noreferrer">{contactTexts.linkedinPrompt[language]}</a>
                        </div>
                    </div>
                    <div className="laserbox__logoBox">
                        <div className="laserbox__link">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={emailLogo} alt="React" />
                            <a href="mailto:ombengue@hotmail.com" target="_blank" rel="noreferrer">{contactTexts.emailPrompt[language]}</a>
                        </div>

                        <div className="laserbox__link">
                            <img className="laserbox__logoItem laserbox__logoItem--big" src={githubLogo} alt="React" />
                            <a href="https://github.com/zombicat79" target="_blank" rel="noreferrer">{contactTexts.githubPrompt[language]}</a>
                        </div>
                    </div>
                </div>
            </LaserBox>
        </section>
    )
}

export default Contact;