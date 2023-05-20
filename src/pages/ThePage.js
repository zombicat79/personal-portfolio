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
    const handleContentState = (transitDelay, consolidationDelay) => {
        setTimeout(() => {
            setContentState("appearing");
            setTimeout(() => {
                setContentState("visible");
            }, consolidationDelay)
        }, transitDelay)
    }
    useEffect(() => {
        handleContentState(6000, 3000);
    }, [])

    // Controls laserbox content change and fade-in effect of new content
    const [activeContent, setActiveContent] = useState(0);
    const handleActiveContent = () => {
        // setContentState("invisible");
        setActiveContent((prevState) => {
            return prevState === 0 ? prevState+1 : prevState-1;
        })
        handleContentState(0, 3000);
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
                    {
                        activeContent === 0 &&
                        <div>
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
                                    <p onClick={() => handleActiveContent()}>{pageTexts.assetsBtn[language]}</p>
                                </span>
                                <span className="laserbox__chunk">
                                    <p>{pageTexts.assetsPrompt[language]}</p>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        activeContent === 1 &&
                        <div>
                            <p className="laserbox__link" onClick={() => handleActiveContent()}>
                                <span>{"\u2190"} Go back</span>
                            </p>
                            <br></br>
                            
                            <div className="laserbox__creditBox">
                                <div className="laserbox__creditBox--left">
                                    <ul className="laserbox__bulletList">
                                        <li className="laserbox__creditItem">Cottonbro Studio &ndash; www.unsplash.com &ndash; Crime scene</li>
                                        <li className="laserbox__creditItem"><i>Unkonwn author</i> &ndash; www.pixabay.com &ndash; Tropical pier</li>
                                        <li className="laserbox__creditItem">Pixelkult &ndash; www.pixabay.com &ndash; Phone apps</li>
                                        <li className="laserbox__creditItem">Markus Spiske &ndash; www.pixabay.com &ndash; Matrix cascade</li>
                                        <li className="laserbox__creditItem">Claudio Schwarz &ndash; www.unsplash.com &ndash; Supermarket shelves</li>
                                        <li className="laserbox__creditItem">Edmar Gonçalves &ndash; www.unsplash.com &ndash; Lifeguard stuff</li>
                                        <li className="laserbox__creditItem">Vince Fleming &ndash; www.unsplash.com &ndash; Burgers</li>
                                        <li className="laserbox__creditItem">Ketut Subiyanto &ndash; www.pexels.com &ndash; Waiter pouring beer</li>
                                        <li className="laserbox__creditItem">Patrick Campanale &ndash; www.unsplash.com &ndash; Stationed airliner</li>
                                        <li className="laserbox__creditItem">Kenny Eliason &ndash; www.unsplash.com &ndash; Police car</li>
                                        <li className="laserbox__creditItem">Andrea Piacquadio &ndash; www.pexels.com &ndash; Reception desk</li>
                                        <li className="laserbox__creditItem">Mohammad Arrahmanur &ndash; www.unsplash.com &ndash; Airliner aisle</li>
                                        <li className="laserbox__creditItem">Joakim Honkasalo &ndash; www.unsplash.com &ndash; Gambling slot machine</li>
                                        <li className="laserbox__creditItem">Alexey Komissarov &ndash; www.pexels.com &ndash; Barcelona</li>
                                        <li className="laserbox__creditItem">Mo Ismail &ndash; www.pexels.com &ndash; Dubai</li>
                                        <li className="laserbox__creditItem">SpaceX &ndash; www.pexels.com &ndash; Mars conquer</li>
                                    </ul>
                                </div>
                                <div className="laserbox__creditBox--right">
                                    <img src={reactLogo} alt="" />
                                </div>
                            </div>

                            <br></br>
                            <p>Images</p>
                        </div>
                    }
                </div>
            </LaserBox>
        </section>
    )
}

export default ThePage;