import React, { useContext, useState, useEffect } from 'react';

import LaserBox from './../components/layout/LaserBox';
import { LangContext } from "./../App";

import whatsappLogo from './../images/logos/whatsapp-logo.png';
import linkedinLogo from './../images/logos/linkedin-logo.png';
import emailLogo from './../images/logos/email-logo.png';
import githubLogo from './../images/logos/github-logo.png';

import contactTexts from './../texts/Contact_texts';

const contactConfig = {
    whatsapp: {
        logo: null,
        text: false
    },
    linkedin: {
        logo: null,
        text: false
    },
    email: {
        logo: null,
        text: false
    },
    github: {
        logo: null,
        text: false
    }
}

function Contact(props) {
    const language = useContext(LangContext);

    let personalizedAddress = "";
    switch(language) {
        case "cat":
            personalizedAddress = props.methods.personalizeParagraph("name", "Molt bé", contactTexts.contactIntro[language]);
            break;
        case "esp":
            personalizedAddress = props.methods.personalizeParagraph("name", "Muy bien", contactTexts.contactIntro[language]);
            break;
        default:
            personalizedAddress = props.methods.personalizeParagraph("name", "All right", contactTexts.contactIntro[language]);
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

    const [contactState, setContactState] = useState(contactConfig);
    const handleContacts = (target, movement) => {
        const newConfig = JSON.parse(JSON.stringify(contactState));
        for (const contactMethod in newConfig) {
            if (contactMethod === target) {
                newConfig[target].logo = movement;
                newConfig[target].text = !newConfig[target].text;
            } else {
                newConfig[contactMethod].logo = null;
                newConfig[contactMethod].text = false;
            }
        }
        setContactState(newConfig);
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
            <LaserBox>
                <div className={`laserbox__content-wrapper laserbox__content-wrapper--${contentState}`}>
                    <p className="laserbox__paragraph">{personalizedAddress}</p>
                    <br></br>
                    <p className="laserbox__paragraph">{contactTexts.contactAppeal[language]}</p>
                    <br></br>
                    <p className="laserbox__paragraph u-margin-bottom-big">{contactTexts.emphaticClosure[language]}</p>

                    <div className="laserbox__logoBox">
                        <div className="laserbox__link">
                            <img 
                                className={`laserbox__logoItem laserbox__logoItem--big laserbox__logoItem--${contactState.whatsapp.logo}`} 
                                src={whatsappLogo} 
                                onMouseOver={() => {handleContacts("whatsapp", "gone-left")}}
                                alt="Whatsapp" 
                            />
                            <a 
                                className={`link__text link__text--${contactState.whatsapp.text} link__text--whatsapp`} 
                                href="https://wa.me/34654954559"
                                onMouseOut={() => {handleContacts("whatsapp", "returned-left")}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {contactTexts.whatsappPrompt[language]}
                            </a>
                        </div>

                        <div className="laserbox__link">
                            <img 
                                className={`laserbox__logoItem laserbox__logoItem--big laserbox__logoItem--${contactState.linkedin.logo}`} 
                                src={linkedinLogo}
                                onMouseOver={() => {handleContacts("linkedin", "gone-right")}}
                                alt="Linkedin"
                            />
                            <a 
                                className={`link__text link__text--${contactState.linkedin.text} link__text--linkedin`} 
                                href="https://www.linkedin.com/in/david-castejon-ferrer/"
                                onMouseOut={() => {handleContacts("linkedin", "returned-right")}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {contactTexts.linkedinPrompt[language]}
                            </a>
                        </div>
                    </div>
                    <div className="laserbox__logoBox">
                        <div className="laserbox__link">
                            <img 
                                className={`laserbox__logoItem laserbox__logoItem--big laserbox__logoItem--${contactState.email.logo}`} 
                                src={emailLogo} 
                                onMouseOver={() => {handleContacts("email", "gone-left")}}
                                alt="Email" 
                            />
                            <a 
                                className={`link__text link__text--${contactState.email.text} link__text--email`} 
                                href="mailto:ombengue@hotmail.com"
                                onMouseOut={() => {handleContacts("email", "returned-left")}}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                {contactTexts.emailPrompt[language]}
                            </a>
                        </div>

                        <div className="laserbox__link">
                            <img 
                                className={`laserbox__logoItem laserbox__logoItem--big laserbox__logoItem--${contactState.github.logo}`} 
                                src={githubLogo}
                                onMouseOver={() => {handleContacts("github", "gone-right")}}
                                alt="Github" 
                            />
                            <a 
                                className={`link__text link__text--${contactState.github.text} link__text--github`} 
                                href="https://github.com/zombicat79"
                                onMouseOut={() => {handleContacts("github", "returned-right")}}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                {contactTexts.githubPrompt[language]}
                            </a>
                        </div>
                    </div>
                </div>
            </LaserBox>
        </section>
    )
}

export default Contact;